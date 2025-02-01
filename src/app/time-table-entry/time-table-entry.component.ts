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
import { DataService } from '../services/data.service';
import { Stint } from '../model/stint';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.selectedDriver = this.entry()?.driver ?? '';
    this.startTime = this.entry()?.start ?? '';
    this.endTime = this.entry()?.end ?? '';
  }

  onDriverSelected(event: any) {
    this.updateStint('driver', event);
  }

  onStartChanged(event: any) {
    this.updateStint('start', event);
  }

  onEndChanged(event: any) {
    this.updateStint('end', event);
  }

  onHeavyChanged(event: any) {
    this.updateStint('isHeavy', event);
  }

  updateStint(key: string, value: string) {
    this.dataService.stints.update((x) => {
      const index = x.indexOf(this.entry());
      x[index] = { ...x[index], [key]: value };
      return [...x];
    });
  }

  deleteStint() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this stint?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.stints.update((value) => {
          value.splice(value.indexOf(this.entry()), 1);
          return [...value];
        });
      }
    });
  }
}
