import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {tap} from 'rxjs/operators';

declare var toastr: any;
declare var $: any;

export class CustomHttpInterceptor implements CustomHttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        /* exclude auth */
        if (!req.url.split('/').includes('internal')) {
            return next.handle(req);
        }

        const newReq = req.clone({
            headers: req.headers.set('Authorization', localStorage.token)
        });

        return next.handle(newReq).pipe(tap(data => {

        }, (err: HttpErrorResponse) => {
          if (err.error.code === 97) {
            localStorage.clear();
            console.log('Session Timeout');
          } else if (err.error.code === 98) {
            localStorage.clear();
            console.log('Unauthorized');
          }
        }));
    }

}
