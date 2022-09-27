import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  login(credentials: {
    credentials?: any;
    username?: any;
    password?: any;
  }): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username: credentials.username,
        password: credentials.password,
      },
      httpOptions
    );
  }

  // newLogin(loginData: any) {
  //   return this.http.post(AUTH_API + 'signin', loginData, {
  //     headers: this.requestHeader,
  //   });
  // }

  register(user: {
    username: any;
    email: any;
    password: any;
  }): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username: user.username,
        email: user.email,
        password: user.password,
      },
      httpOptions
    );
  }
}
