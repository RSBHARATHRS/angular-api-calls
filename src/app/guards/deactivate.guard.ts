import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserFormComponent } from '../pages/user-form/user-form.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<any> {

  canDeactivate(
    component: UserFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.canDeactivate()) {
      return true; // will allow to deactivate
    } else {
      alert(" please save your changes ");
      return false; // won't allow to activate
    }
  }

}
