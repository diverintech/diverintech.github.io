import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../interfaces/job.interface';

@Pipe({
  name: 'dateRange',
})
export class DateRangePipe implements PipeTransform {
  transform(roles: Role[]): string {
    if (!roles || roles.length === 0) {
      return '';
    }

    // Sort roles by startDate
    const sortedRoles = roles.sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );

    const startDate = sortedRoles[0].startDate; // First start date
    const endDate = sortedRoles[sortedRoles.length - 1].endDate || 'Present'; // Last end date

    return `${startDate} - ${endDate}`;
  }
}
