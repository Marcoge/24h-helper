import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-driver-dialog',
  templateUrl: './add-driver-dialog.component.html',
  styleUrl: './add-driver-dialog.component.scss',
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class AddDriverDialogComponent {
  constructor(private dialogRef: MatDialogRef<AddDriverDialogComponent>) {}
  name = '';
  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close(this.name);
  }
}
