import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private _httpClient : HttpClient ) { }
  username = '';
  email = '';
  password = '';
  passwordRepeat = '';

  onChangePassword(event:Event): void {
    this.password = (event.target as HTMLInputElement).value;
  }

  onChangeUsername(event:Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }

  onChangeEmail(event:Event): void {
    this.email = (event.target as HTMLInputElement).value;
  }

  onChangePasswordRepeat(event:Event): void {
    this.passwordRepeat = (event.target as HTMLInputElement).value;
  }
  onClickSingUp(){
    // fetch('http://localhost:3000/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({username: this.username, email: this.email, password: this.password}),
    // })
    // .then((response) => response.json())

    this._httpClient
    .post('api/users', {
      username: this.username,
       email: this.email,
        password: this.password
      }).subscribe(() => {
      });
  }

  isDisabled(): boolean {
    return this.password ? (this.password !== this.passwordRepeat) : true;
  }
}
