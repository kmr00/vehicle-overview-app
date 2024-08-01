import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLoginGuard} from "./core/guards/auth-login.guard";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [AuthLoginGuard.canActivate]
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./pages/vehicle/vehicle.module').then(m => m.VehicleModule),
    canActivate: [AuthGuard.canActivate]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
