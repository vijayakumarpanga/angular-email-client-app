import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18),
    Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    password: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18)]),
    confirmPassword: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18)])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
