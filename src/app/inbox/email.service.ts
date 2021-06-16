import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface getEmailResponse{
  id: string,
  from :string,
  subject:string
}
@Injectable({
  providedIn: 'root'
})
export class EmailService {
   rootUrl ="https://api.angular-email.com"
  constructor(private http : HttpClient) { }

  getEmail(){

    return this.http.get<getEmailResponse[]>(`${this.rootUrl}/emails`)
  }
}
