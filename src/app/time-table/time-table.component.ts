import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TimeTableEntryComponent } from '../time-table-entry/time-table-entry.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../data.service';
import { Stint } from '../model/stint';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-time-table',
  imports: [
    MatToolbarModule,
    MatListModule,
    TimeTableEntryComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.scss',
})
export class TimeTableComponent {
  stints = this.dataService.stints;
  private themeService = inject(ThemeService);
  isDarkTheme = this.themeService.isDarkTheme;

  constructor(private dataService: DataService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  addStint() {
    this.dataService.stints.update((stints) => {
      if (stints.length > 0) {
        const startTime = stints[stints.length - 1].end;
        const endHour = parseInt(startTime.split(':')[0]) + 1;
        const endTime = `${endHour.toString().padStart(2, '0')}:${
          startTime.split(':')[1]
        }`;

        return [
          ...stints,
          new Stint({
            id: stints.length + 1,
            driver: 'driver',
            start: startTime,
            end: endTime,
            isHeavy: false,
          }),
        ];
      } else {
        return [
          ...stints,
          new Stint({
            id: stints.length + 1,
            driver: 'driver',
            start: '00:00',
            end: '12:00',
            isHeavy: false,
          }),
        ];
      }
    });
  }
}
