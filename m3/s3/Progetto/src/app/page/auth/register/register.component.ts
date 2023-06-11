import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Register } from 'src/app/interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private authSvc: AuthService
  ) {

  }

  user: Register = {
    email: '',
    password: '',
    name: '',
    surname: ''
  };

  register() {
    this.authSvc.signUp(this.user)
      .subscribe(accessData => {
        alert(accessData.user.name)
      })
  }


}
