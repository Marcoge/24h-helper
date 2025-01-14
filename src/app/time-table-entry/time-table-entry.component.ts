import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-time-table-entry',
  imports: [MatCardModule],
  templateUrl: './time-table-entry.component.html',
  styleUrl: './time-table-entry.component.scss',
})
export class TimeTableEntryComponent {
  @Input() entry!: TimeTableEntry;
}

export interface TimeTableEntry {
  driver: string;
  start: string;
  end: string;
}
