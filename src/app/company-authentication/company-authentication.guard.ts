import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'

export const companyAuthenticationGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem("CompanyLogin") === "Login successful"){
    return true;
  }
  else{
    let r = inject(Router);
    r.navigate(["/CompanyLogin"])
    return false;
  }
};

