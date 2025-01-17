import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {
  TimeTableEntryComponent,
  TimeTableEntry,
} from '../time-table-entry/time-table-entry.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../data.service';

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
  timeTableEntry!: TimeTableEntry;
  timeTableEntries: TimeTableEntry[] = [
    { driver: 'laber', start: '09:00', end: '10:00' },
    { driver: 'john', start: '10:00', end: '11:00' },
    { driver: 'doe', start: '11:00', end: '12:00' },
    { driver: 'smith', start: '12:00', end: '13:00' },
    { driver: 'jane', start: '13:00', end: '14:00' },
    { driver: 'brown', start: '14:00', end: '15:00' },
  ];

  constructor(private dataService: DataService) {}

  addStint() {}
}
