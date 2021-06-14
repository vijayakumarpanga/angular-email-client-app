import { Component } from '@angular/core';
import { AuthService } from './auth-module/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-client';
  signedin : boolean
  constructor(private authService : AuthService){
    
  }

  ngOnInit(){

     
    this.authService.signedin$.subscribe((signedin)=> {
        console.log("ng oninit",signedin)
        this.signedin=signedin} )
          
  }
}
