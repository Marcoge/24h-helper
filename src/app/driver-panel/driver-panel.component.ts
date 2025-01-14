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
  drivers = [
    'Marco',
    'Flo',
    'Sebastian',
    'Markus',
    'Anna',
    'John',
    'Lisa',
    'Tom',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.drivers, event.previousIndex, event.currentIndex);
    } else {
      if (confirm('Are you sure you want to remove this driver?')) {
        this.drivers.splice(event.previousIndex, 1);
      }
    }
  }

  addDriver() {
    if (this.driver) {
      this.drivers.push(this.driver);
      this.driver = '';
    }
  }
}
