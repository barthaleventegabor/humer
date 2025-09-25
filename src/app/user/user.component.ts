import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  userForm: any;
  userList:any[] = []
  passwordVisible = false

  constructor(
    private user: UserService,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.builder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required, Validators.minLength(3)],
      passre: ['', Validators.required, Validators.minLength(3)],
      roleId: ''
    })
    this.user.getUsers().subscribe({
      next: (res: any) => {
        console.log(res.data)
        this.userList = res.data
      }
    })
  }

  createUser(event: SubmitEvent) {
    console.log('Létrehozás...')

    console.log(this.userForm.value)

    //Küldés REST API végpontra

    event.preventDefault();
  }

  toggolePasswordVisible() {
    this.passwordVisible = !this.passwordVisible
  }

}
