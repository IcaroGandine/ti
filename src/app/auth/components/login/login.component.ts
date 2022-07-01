import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginApiService } from '../../services/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private loginApiService: LoginApiService) { }

  body: any;

  ngOnInit(): void {
  }

  form = new FormGroup ({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  submitForm() {
    if (this.form.invalid) {
      console.log(this.form)
      return;
    }

    else {
      this.createBody(this.form.get('email')!.value, this.form.get('password')!.value);
      this.authService.doLogin(this.body);
      console.log(this.body)
    }
  }

  private createBody = (email :string | null ,password: string | null) => this.body = {
    email: email,
    password: password,
  }
  
}
