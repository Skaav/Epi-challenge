import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { Access } from 'src/app/interfaces/access';
import { Login } from 'src/app/interfaces/login';
import { Register } from 'src/app/interfaces/register';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt: JwtHelperService = new JwtHelperService();
  apiUrl = environment.apiUrl;

  private authSubject = new BehaviorSubject<null | Access>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(dato => Boolean(dato)));

  logoutTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreUser();
  }

  signUp(data: Register) {
    return this.http.post<Access>(this.apiUrl + '/register', data)
      .pipe(catchError(this.errors));
  }

  login(data: Login) {
    return this.http.post<Access>(this.apiUrl + '/login', data)
      .pipe(tap(data => {
        this.authSubject.next(data);
        localStorage.setItem('user', JSON.stringify(data))

        const expDate = this.jwt
          .getTokenExpirationDate(data.accessToken) as Date;
        this.autoLogout(expDate)
      }),
        catchError(this.errors)
      )
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }
  }

  autoLogout(expDate: Date) {
    const expMs = expDate.getTime() - new Date().getTime();
    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, expMs)
  }

  restoreUser() {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      return
    }
    const user: Access = JSON.parse(userJson)
    if (this.jwt.isTokenExpired(user.accessToken)) {
      return;
    }

    this.authSubject.next(user);

  }

  errors(err: any) {
    switch (err.error) {
      case "Email and Password are required":
        return throwError('Email e password obbligatorie');
        break;
      case "Email already exists":
        return throwError('Utente esistente');
        break;
      case 'Email format is invalid':
        return throwError('Email scritta male');
        break;
      case 'Cannot find user':
        return throwError('utente inesistente');
        break;
      default:
        return throwError('Errore');
        break;
    }
  }

}
