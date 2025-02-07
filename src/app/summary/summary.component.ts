import { Component, computed, inject, Signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DataService } from '../services/data.service';
import { Summary } from '../model/summary';

@Component({
  selector: 'app-summary',
  imports: [MatListModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  private dataService = inject(DataService);
  public summary: Signal<Summary>;
  public totalDriverChanges = computed(() => {
    return this.dataService.stints().length - 1 >= 0
      ? this.dataService.stints().length - 1
      : 0;
  });

  constructor() {
    this.summary = this.dataService.summary;
  }

  getHours(delta: number): string {
    if (!delta) {
      return '0';
    }
    return Math.floor(delta / 1000 / 60 / 60).toString();
  }

  getMinutes(delta: number): string {
    if (!delta) {
      return '00';
    }
    return Math.floor((delta / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0');
  }
}
