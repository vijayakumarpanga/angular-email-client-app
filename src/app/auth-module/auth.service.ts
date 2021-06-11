import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  fetchUniqueUser(value) {
    return this.http.post<any>('https://api.angular-email.com/auth/username', { username: value });
  }
}
