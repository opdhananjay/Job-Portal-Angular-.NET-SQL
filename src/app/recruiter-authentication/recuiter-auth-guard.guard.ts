import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'
export const recuiterAuthGuardGuard: CanActivateFn = (route, state) => {



  if(sessionStorage.getItem("data") === "Login successful"){
    return true;
  }
  else{
    let r = inject(Router);
    r.navigate(["/RecruiterLogin"])
    return false;
  }
};
