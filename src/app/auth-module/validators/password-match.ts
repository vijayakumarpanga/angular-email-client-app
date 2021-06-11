import { Validators, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core'

@Injectable({ providedIn: "root" })
export class PasswordMatch extends Validators {
    validate(signup: FormGroup) {
        console.log(signup.controls.password.value)
        console.log(signup.controls.confirmPassword.value)
        if (signup.controls.password.value === signup.controls.confirmPassword.value) {
            return null;
        }
        return { passwordNotMatch: true }
    }
}
