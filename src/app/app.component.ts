import { Component, OnInit, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from './services/storage.service';
import { ConfigService } from './services/config.service';
import { DriverPanelComponent } from './driver-panel/driver-panel.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { SummaryComponent } from './summary/summary.component';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';

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
export class AppComponent implements OnInit {
  title = '24h-helper';
  private themeService = inject(ConfigService);
  private dialog = inject(MatDialog);
  private storageService = inject(StorageService);

  constructor() {
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
    if (!this.themeService.dontShowInfoDialog()) {
      this.dialog.open(InfoDialogComponent, {
        autoFocus: 'okButton',
      });
    }
  }
}
