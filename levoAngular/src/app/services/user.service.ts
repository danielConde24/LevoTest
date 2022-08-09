import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginResponse } from '../interfaces/loginResponse';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API: string = 'http://localhost:3000/api/';
  constructor(private readonly http: HttpClient) { }

  login(credentials: any): Observable<loginResponse>{
    return this.http.post<loginResponse>(this.API + 'login', {user: credentials.user, password: credentials.password});
  }

  isValidToken(token:string) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token
      })
    };
    return this.http.get<any>(this.API + 'isValidToken', httpOptions);
  }
}