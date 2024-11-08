import { Component } from '@angular/core';
import {NavigationService} from '../../services/navigation.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {IUserPayload} from '../../models/users.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registrationForm: FormGroup;
  constructor(
    private navigationService : NavigationService,
    private formBuilder : FormBuilder,
    private userService: UserService,
  ) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void{
    if(this.registrationForm.valid){
      const {username, password} = this.registrationForm.value;

      const payload : IUserPayload = {username, password}
      this.userService.registerUsername(payload).subscribe({
        next: () => {
          console.log("Registration successfull");
          this.navigationService.redirectTo('login', {fromRegistration : 'true'})
        },
        error: (err) => {
          console.error('Error during registration', err)
        }
      })
    }
  }
  goToPage(page: string){
    //this.navigationService.redirectTo(page);
    this.navigationService.redirectTo('login', {fromRegistration : 'true'})
  }
}
