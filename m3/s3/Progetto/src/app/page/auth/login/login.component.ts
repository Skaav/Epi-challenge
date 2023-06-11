import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }


  user: Login = {
    email: '',
    password: ''
  }

  login() {
    this.authSvc.login(this.user)
      .subscribe(accessData => {
        this.router.navigate(['/home'])
      })
  }
}
