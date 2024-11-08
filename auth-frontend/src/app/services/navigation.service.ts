import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {}

  redirectTo(page: string, queryParams?: {[key: string] : any}) : void {
    this.router.navigate([page], {queryParams}).then(success => {
      if(!success) {
        console.error(`Error: redirect to ${page} failed`)
      }
    })
  }
}
