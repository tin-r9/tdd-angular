import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {


  password = '';
  passwordRepeat = '';

  onChangePassword(event:Event): void {
    this.password = (event.target as HTMLInputElement).value;
  }

  onChangePasswordRepeat(event:Event): void {
    this.passwordRepeat = (event.target as HTMLInputElement).value;
  }

  isDisabled(): boolean {
    return this.password ? (this.password !== this.passwordRepeat) : true;
  }
}
