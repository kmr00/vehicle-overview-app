import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {VehicleNamePipe} from "./util/pipe/VehicleNamePipe";


@NgModule({
  declarations: [
    HeaderComponent,
    VehicleNamePipe
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    MenuModule
  ],
  exports: [
    HeaderComponent,
    VehicleNamePipe
  ]
})
export class SharedModule {
}
