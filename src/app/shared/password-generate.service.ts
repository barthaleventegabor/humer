import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordGenerateService {

  constructor() { }

  generateSimplePassword() {
    const randomNumber = Math.random()
    return randomNumber.toString(36).slice(2, 10)
  }

  generateCustomPassword(
      length: number = 8,
      lowerCase: boolean = true,
      upperCase: boolean = true,
      number: boolean = true,
      symbol: boolean = true
    ) {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberChars = '0123456789'
    const symbolChars = '!?-()[]{}.;:$#<>&=%*_@,|/'

    let chars = '';
    if(lowerCase) {
      chars += lowerChars
    }
    if(upperCase) {
      chars += upperChars
    }
    if(number) {
      chars += numberChars
    }
    if(symbol) {
      chars += symbolChars
    }

    let pass = ''
    for(let i= 0;i<length; i++) {
      const index = Math.floor(Math.random() * chars.length)
      pass += chars[index]
    }
    return pass
  }
}
