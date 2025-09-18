import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  
  constructor(private app: AppComponent) {
    this.startLogout()
  }
  ngOnInit() {}

  startLogout() {
    this.app.isLoggedIn = false
    localStorage.removeItem('isLoggedIn')
  }
}
