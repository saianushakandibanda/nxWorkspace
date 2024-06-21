import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public login :boolean = false;
  constructor() { }
  loggedIn(){
    this.login = true;
  }
}
