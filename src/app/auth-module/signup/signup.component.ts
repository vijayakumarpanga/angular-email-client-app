import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordMatch } from '../validators/password-match'
import { UniqueUser } from '../validators/unique-user';
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
    Validators.pattern(/^[a-zA-Z0-9]+$/),

    ], [this.uniquUser.validate]),
    password: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18)]),
    confirmPassword: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(18)])
  }, { validators: [this.passworsMatch.validate] })
  constructor(private passworsMatch: PasswordMatch, private uniquUser: UniqueUser) { }

  ngOnInit(): void {
  }

}
