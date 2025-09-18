import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  isLoggedIn = false;

  ngOnInit() {
    this.readLogged();
  }

  readLogged() {
    const a = localStorage.getItem('isLogedIn')
    console.log('eredmény: ', a)
    if(a != null) {
      this.isLoggedIn = true
    }
    
  }

}
