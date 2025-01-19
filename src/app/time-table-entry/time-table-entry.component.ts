import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Stint } from '../model/stint';

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
    FormsModule,
  ],
  templateUrl: './time-table-entry.component.html',
  styleUrl: './time-table-entry.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeTableEntryComponent {
  entry = input.required<Stint>();
  names = this.dataService.drivers;
  selectedDriver = '';
  startTime = '';
  endTime = '';
  timeChecker = new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$');

  ngOnInit() {
    this.selectedDriver = this.entry()?.driver ?? '';
    this.startTime = this.entry()?.start ?? '';
    this.endTime = this.entry()?.end ?? '';
  }

  constructor(private dataService: DataService) {}

  onDriverSelected(event: any) {
    this.updateStint('driver', event);
  }

  onStartChanged(event: any) {
    if (this.timeChecker.test(event)) {
      this.updateStint('start', event);
    }
  }

  onEndChanged(event: any) {
    if (this.timeChecker.test(event)) {
      this.updateStint('end', event);
    }
  }

  onHeavyChanged(event: any) {
    this.updateStint('isHeavy', event);
  }

  updateStint(key: string, value: string) {
    this.dataService.stints.update((x) => {
      const index = x.indexOf(this.entry());
      x[index] = new Stint({
        ...this.entry(),
        [key]: value,
      });
      console.log(x[index]);
      return x;
    });
  }

  deleteStint() {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.dataService.stints.update((value) => {
        value.splice(value.indexOf(this.entry()), 1);
        return value;
      });
    }
  }
}
