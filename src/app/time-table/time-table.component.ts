import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TimeTableEntryComponent } from '../time-table-entry/time-table-entry.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Stint } from '../model/stint';
import { ConfigService } from '../services/config.service';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  stints = this.dataService.stints;
  private themeService = inject(ConfigService);
  private dialog = inject(MatDialog);
  isDarkTheme = this.themeService.isDarkTheme;

  constructor(private dataService: DataService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  openInfoDialog() {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
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
