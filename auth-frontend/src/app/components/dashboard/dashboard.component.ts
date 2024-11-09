import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private navigationService : NavigationService){}

  goToPage(page: string){
    this.navigationService.redirectTo(page);
  }

}
