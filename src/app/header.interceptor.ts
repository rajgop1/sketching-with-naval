import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = `Bearer 7f1890a8b4e2a81ec0ab4b144d9a6872d0efd509153840dc5dd88b4512753f70809a5368f272294f823331d66ae0a73e76e9d8d7e2cd95a9d12a205a61ee37164a8b039b9433f01e232b6ad678057425517abaf2de49710c726bbe99ed617ded0ae43d9f5272128a5a4ba8fc32aed0703752914222f6134bec6b64fa61592e51`
    const modifiedReq = request.clone({
      headers: request.headers.set('authorization', token)
    })
    return next.handle(modifiedReq);
  }
}
