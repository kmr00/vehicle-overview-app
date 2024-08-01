import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleNamePipe'
})
export class VehicleNamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    const index = value.indexOf('##');
    if (index !== -1) {
      return value.substring(0, index).trim();
    }
    return value;
  }
}
