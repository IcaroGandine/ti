import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  login = (body: Credentials) => {
    return this.http.post<any>('https://api-labs.tindin.com.br/auth', body);
  };
}
