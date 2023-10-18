import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private _httpClient : HttpClient) { }

  username =  new FormControl('' ,[Validators.required]);
  email =  new FormControl('' ,[Validators.required,Validators.email]);
  password =  new FormControl('' ,[Validators.required]);
  passwordRepeat =  new FormControl('' ,[ Validators.required]);
  matcher = new MyErrorStateMatcher();

  onClickSingUp(){
    this._httpClient
    .post('api/users', {
      username: this.username,
       email: this.email,
        password: this.password,
      }).subscribe(() => {
      });
  }
}
