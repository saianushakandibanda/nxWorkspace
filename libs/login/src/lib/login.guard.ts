
import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { LoginService } from './login/sevice/login.service';

export const authGuard:CanMatchFn = (route,segments)=>{
    const isLoggedIn = inject(LoginService).login;
    const router = inject(Router);

    if(isLoggedIn){
        return true;
    }
    else{
       return router.navigate(['/login'])
    }
}