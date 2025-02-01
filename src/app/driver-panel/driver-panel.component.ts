import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  CdkDragHandle,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

import { DataService } from '../services/data.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-driver-panel',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
  ],
  templateUrl: './driver-panel.component.html',
  styleUrl: './driver-panel.component.scss',
})
export class DriverPanelComponent {
  public driver = '';
  public drivers;

  constructor(private dataService: DataService, private dialog: MatDialog) {
    this.drivers = this.dataService.drivers;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      this.dataService.drivers.update((value) => {
        moveItemInArray(value, event.previousIndex, event.currentIndex);
        return [...value];
      });
    } else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: { message: 'Are you sure you want to delete this driver?' },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.dataService.drivers.update((value) => {
            value.splice(event.previousIndex, 1);
            return [...value];
          });
        }
      });
    }
  }

  addDriver() {
    if (this.driver) {
      //restricting length of driver name to 16 characters due to layout reasons.
      this.driver = this.driver.substring(0, 17);
      this.dataService.drivers.update((drivers) => [...drivers, this.driver]);
      this.driver = '';
    }
  }
}
