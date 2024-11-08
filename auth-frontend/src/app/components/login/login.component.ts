import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {CommonModule} from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserPayload } from '../../models/users.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  fromRegistration? : boolean;
  loginForm: FormGroup;


  constructor(
    private navigationService : NavigationService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    this.fromRegistration = this.route.snapshot.queryParams['fromRegistration'] === 'true';
  }
  goToPage(page: string){
    this.navigationService.redirectTo(page);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;

      const payload : IUserPayload = {username, password};
      this.userService.loginUsername(payload).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          localStorage.setItem('access_token', response.access)
          this.goToPage('profile');
        },
        error: (err) =>{
          console.error('Error performing login', err);
        }
      })
    }
  }


}
