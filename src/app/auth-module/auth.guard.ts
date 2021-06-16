import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap,skipWhile,take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService : AuthService,private router : Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.authService.signedin$.pipe(
      skipWhile(signedin=>signedin === null),
      tap(signedin=>{
        if(!signedin){
          this.router.navigateByUrl('/')
        }
      }),
      take(1)
    )
  }
}
