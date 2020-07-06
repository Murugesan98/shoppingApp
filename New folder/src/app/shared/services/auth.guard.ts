import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
/**
 * @author Murugesan D
 * @Date 06-07-2020
 */
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}
  /**
   * @method canActivate Angular router guard
   * @param next  Router snapshot
   * @param state router state snapshot
   * @return {boolean}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.userLoggedIn) {
      this.router.navigate([""]);
    }
    return true;
  }
}
