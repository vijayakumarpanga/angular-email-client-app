import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth-module/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-client';
  signedin : boolean;
  //use async pipe directly in template
  //signedin$ : BehaviorSubject<boolean>
 
  constructor(private authService : AuthService){
    //this.signedin$=this.authService.signedin$
  }

  ngOnInit(){
    
    this.authService.chechAuth().subscribe();
    this.authService.signedin$.subscribe((signedin)=> {
        console.log("ng oninit",signedin)
        this.signedin=signedin} )
    
    
  }
}
