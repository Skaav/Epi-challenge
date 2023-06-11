import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Register } from 'src/app/interfaces/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private authSvc: AuthService,
    private router: Router
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
        this.router.navigate(['/auth', 'login'])
      })

  }


}
