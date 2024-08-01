import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehicleListComponent} from "./components/vehicle-list/vehicle-list.component";

const vehicleRoutes: Routes = [
  {path: '', component: VehicleListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(vehicleRoutes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule {
}
