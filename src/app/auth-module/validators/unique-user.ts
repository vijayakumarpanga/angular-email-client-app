import { AsyncValidator, AbstractControl, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core'
import { AuthService } from '../auth.service'
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';
@Injectable({ providedIn: "root" })
export class UniqueUser implements AsyncValidator {
    constructor(private authService: AuthService) { }
    validate = (control: FormControl) => {
        console.log(control.value)
        return this.authService.fetchUniqueUser(control.value).pipe(
            map(value => {

                
                console.log("inside map", value)
                return null;
                
            }
            ),
            catchError((err) => {
                if(err.status===0){
                    return of({noConnection : true})
                }
                console.log("inside error", err)
                return of({ nonUniqe: true })
            })

        )

    }
}
