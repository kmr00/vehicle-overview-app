import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VehicleRoutingModule} from './vehicle-routing.module';
import {VehicleListComponent} from "./components/vehicle-list/vehicle-list.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";
import {SharedModule} from "../../shared/shared.module";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";


@NgModule({
  declarations: [
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    RippleModule,
    CardModule,
    TagModule,
    SharedModule,
    InputTextModule,
    ReactiveFormsModule,
    TooltipModule
  ]
})
export class VehicleModule {
}
