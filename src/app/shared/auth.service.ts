import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = new BehaviorSubject(false)
  isLoggedIn$ = this._isLoggedIn.asObservable()

  constructor() { }

  loginSucces(){
    this._isLoggedIn.next(true)

  }
  logout(){
    this._isLoggedIn.next(false)

  }
}
