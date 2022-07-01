import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { LoginApiService } from './login-api.service';
import {tap} from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private loginApiService: LoginApiService) {
    const token = localStorage.getItem('tindin_auth');
    this._isLoggedIn$.next(!!token);
   }

  doLogin = (body: any) => {
    return this.loginApiService.login(body).subscribe( res => {
      this._isLoggedIn$.next(true);
      localStorage.setItem('tindin_auth', res.token);
    } )
  };
}
