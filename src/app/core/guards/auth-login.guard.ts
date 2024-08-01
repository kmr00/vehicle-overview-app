import {inject} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {map} from "rxjs";

export namespace AuthLoginGuard {
  export const canActivate = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.isLoggedIn$.pipe(
      map(isLoggedIn => {
        if (isLoggedIn) {
          router.navigate(['/vehicle']);
        }
        return !isLoggedIn;
      })
    );
  }
}
