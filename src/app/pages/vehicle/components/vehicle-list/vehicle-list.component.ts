import {Component, OnInit, ViewChild} from '@angular/core';
import {VehicleService} from "../../../../core/vehicle/vehicle.service";
import {VehicleModel} from "../../../../core/vehicle/vehicle.model";
import {FormControl} from "@angular/forms";
import {debounceTime, startWith} from "rxjs";
import {Table} from "primeng/table";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicles: VehicleModel[] = [];
  filterControl: FormControl<string | null> = new FormControl<string | null>('');
  @ViewChild('dt') table: Table | undefined;

  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((res) => {
      this.vehicles = res
    });

    this.filterControl.valueChanges.pipe(
      debounceTime(250),
      startWith('')
    ).subscribe((searchValue) => {
      if (this.table) {
        this.table.filterGlobal(searchValue, 'contains');
      }
    });
  }
}
