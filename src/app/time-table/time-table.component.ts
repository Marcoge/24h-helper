import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TimeTableEntryComponent } from '../time-table-entry/time-table-entry.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../data.service';
import { Stint } from '../model/stint';

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

  constructor(private dataService: DataService) {}

  addStint() {
    this.dataService.stints.update((stints) => {
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
    });
  }
}
