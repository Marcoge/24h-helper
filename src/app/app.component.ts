import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  CdkDragHandle,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { AddDriverDialogComponent } from './add-driver-dialog/add-driver-dialog.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private dialog: MatDialog, private cdRef: ChangeDetectorRef) {}
  title = '24h-helper';
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

  openDialog() {
    const dialogRef = this.dialog.open(AddDriverDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.drivers.push(result);
        this.cdRef.detectChanges();
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.drivers, event.previousIndex, event.currentIndex);
    } else {
      if (confirm('Are you sure you want to remove this driver?')) {
        this.drivers.splice(event.previousIndex, 1);
      }
    }
  }
}
