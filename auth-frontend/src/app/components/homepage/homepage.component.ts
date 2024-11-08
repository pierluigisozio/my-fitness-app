import { Component } from '@angular/core';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  constructor(
    private navigationService : NavigationService
  ) {}

  goToPage(page: string){
    this.navigationService.redirectTo(page);
  }

}
