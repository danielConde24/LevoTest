import { Injectable } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {

  constructor(private readonly userService: UserService, private readonly router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userIsLoggedIn();
  }
  
  userIsLoggedIn(): boolean{
    const token = window.localStorage.getItem('TOKEN');
    if(typeof(token) === 'undefined' || token === null || token === '' ){
      this.router.navigate(['fqa']);
      return false;
    }
      
    return true;
  }
}
