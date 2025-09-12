import { Component } from '@angular/core';
import { 
  ReactiveFormsModule, 
  FormBuilder 
} from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: any;

  constructor(
    private builder: FormBuilder,
    private app: AppComponent 
  ) {}

  ngOnInit() {
    this.loginForm = this.builder.group({
      user: 'admin',
      pass: 'admin'
    });
  }

  login(event: Event) {
    console.log(this.loginForm.value)
    const user = this.loginForm.value.user
    const pass = this.loginForm.value.pass
    if(user=='admin' && pass=='admin') {
      console.log('belépés ok...')
      this.app.isLoggedIn = true
    }
    event.preventDefault()
  }
}
