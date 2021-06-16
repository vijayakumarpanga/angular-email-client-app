import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18),
    Validators.pattern(/^[a-zA-Z0-9]+$/),

    ]),
    password: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18)])})
  constructor(private authService :AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  signin(){
    if(this.signinForm.invalid){
    return ;
    }
    this.authService.signin(this.signinForm).subscribe(
      //Navigation code
       (data)=>{
        console.log(data)
        this.router.navigateByUrl('/inbox')

      },
     (err)=>{
       console.log("Inside errors",err)
       if(err.error.username||err.error.password){
         this.signinForm.setErrors({invalidCredentials : true})
       }
       else if(err.status===0){
         this.signinForm.setErrors({noConnection : true})
       }
       else{
       this.signinForm.setErrors({unKnown : true})
       }
       console.log(this.signinForm)
      }
      

    )
      
  }

}
