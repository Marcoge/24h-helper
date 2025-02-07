import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TimeTableEntryComponent } from '../time-table-entry/time-table-entry.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../services/data.service';
import { ConfigService } from '../services/config.service';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';
import { Stint } from '../model/stint';

@Component({
  selector: 'app-time-table',
  imports: [
    MatToolbarModule,
    MatListModule,
    TimeTableEntryComponent,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.scss',
})
export class TimeTableComponent {
  private dataService = inject(DataService);
  private themeService = inject(ConfigService);
  private dialog = inject(MatDialog);
  stints = this.dataService.stints;
  isDarkTheme = this.themeService.isDarkTheme;

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  openInfoDialog() {
    this.dialog.open(InfoDialogComponent, {
      autoFocus: 'okButton',
    });
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
