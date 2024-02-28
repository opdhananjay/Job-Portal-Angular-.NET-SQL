import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userAuthenticationGuardGuard: CanActivateFn = (route, state) => {


  
  if(sessionStorage.getItem("User_login-Data") === "Login successful"){
    return true;
  }
  else{
    let r = inject(Router);
    r.navigate(["/UserLogin"])
    return false;
  }
};
