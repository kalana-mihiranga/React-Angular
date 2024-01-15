import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const value = localStorage.getItem("user");
  if (value && value === 'authenticated') {
    return true;
  } else {
    const routerService = inject(Router);
    return routerService.createUrlTree(['/login']);
    // routerService.navigateByUrl('/login');
    // return false;
  }
};
