import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-time-table-entry',
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './time-table-entry.component.html',
  styleUrl: './time-table-entry.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeTableEntryComponent {
  @Input() entry!: TimeTableEntry;

  selected = 'driver';
  names = ['laber', 'john', 'doe', 'smith', 'jane', 'brown'];

  constructor() {}

  deleteStint() {}
}

export interface TimeTableEntry {
  driver: string;
  start: string;
  end: string;
}
