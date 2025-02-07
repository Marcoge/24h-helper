import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DriverPanelComponent } from './driver-panel/driver-panel.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { SummaryComponent } from './summary/summary.component';
import { StorageService } from './services/storage.service';
import { ThemeService } from './services/theme.service';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    DriverPanelComponent,
    TimeTableComponent,
    SummaryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '24h-helper';
  private themeService = inject(ThemeService);
  private dialog = inject(MatDialog);

  constructor(private storageService: StorageService) {
    effect(() => {
      document.body.classList.toggle(
        'darkMode',
        this.themeService.isDarkTheme()
      );
    });
  }

  ngOnInit() {
    this.storageService.loadFromStorage();
    this.showInfoDialog();
  }

  private showInfoDialog() {
    const dialogRef = this.dialog.open(InfoDialogComponent, {});
  }
}
