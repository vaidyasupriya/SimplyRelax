import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthneticated = false;

  get userIsAUthenticated(){
    return this._userIsAuthneticated;
  }

  constructor() { }

  login(){
    this._userIsAuthneticated = true;
  }

  logout(){
    this._userIsAuthneticated = false;
  }
}
