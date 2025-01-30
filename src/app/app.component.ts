import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DriverPanelComponent } from './driver-panel/driver-panel.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { SummaryComponent } from './summary/summary.component';
import { StorageService } from './storage.service';

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

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.loadFromStorage();
  }
}
