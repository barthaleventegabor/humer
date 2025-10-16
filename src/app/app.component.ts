import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

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

  constructor(private auth : AuthService,
    private router : Router
  ){}

  ngOnInit() {
    this.readLogged();
    this.auth.isLoggedIn$.subscribe(isLoggedIn =>{
      this.isLoggedIn = isLoggedIn
    })
  }

  logout(){
    this.auth.logout()
    this.router.navigate(["login"])
    
  }

  readLogged() {
    const a = localStorage.getItem('isLoggedIn')
    console.log('eredmény: ', a)
    if(a != null) {
      this.isLoggedIn = true
    }
    
  }

}
