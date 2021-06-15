import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpEvent,
    HttpHandler,
   HttpRequest,
   HttpInterceptor, 
   HttpResponse} from "@angular/common/http";

export class AuthHttpInterceptor implements HttpInterceptor{

    intercept(req : HttpRequest<any>, next : HttpHandler):Observable<HttpEvent<any>>{
     
     const modifiedReq = req.clone({withCredentials:true})
     console.log(modifiedReq)
     return next.handle(modifiedReq)
    }
}
