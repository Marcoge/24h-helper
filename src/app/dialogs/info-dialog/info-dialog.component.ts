import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-info-dialog',
  imports: [
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './info-dialog.component.html',
  styleUrl: './info-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoDialogComponent {
  public dontShowAgain = model(this.configService.dontShowInfoDialog());

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    private configService: ConfigService
  ) {}

  onYesClick(): void {
    this.configService.dontShowInfoDialog.set(this.dontShowAgain());
    this.dialogRef.close(true);
  }
}
