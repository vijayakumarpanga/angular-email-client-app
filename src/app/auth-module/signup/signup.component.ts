import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PasswordMatch } from '../validators/password-match'
import { UniqueUser } from '../validators/unique-user';
import {catchError, map} from 'rxjs/operators'
import { of } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18),
    Validators.pattern(/^[a-zA-Z0-9]+$/),

    ], [this.uniquUser.validate]),
    password: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18)]),
    passwordConfirmation: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18)])
  }, { validators: [this.passworsMatch.validate] })
  constructor(private passworsMatch: PasswordMatch, private uniquUser: UniqueUser,private authService : AuthService) {
    console.log(this.signupForm)
   }

  ngOnInit(): void {
  }
  signup(){
    if(this.signupForm.invalid){
      return;
    }
    this.authService.signup(this.signupForm).subscribe(
      (data)=>{ 
        console.log(data)
      },
      (err)=>{
        console.log(err)
        if(!err.status)
        this.signupForm.setErrors({noConnection : true})
        else
        this.signupForm.setErrors({unKnown : true})
      }
      
    )
    
  }

}
