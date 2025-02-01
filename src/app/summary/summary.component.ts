import { Component, computed, Signal } from '@angular/core';
import { DataService } from '../services/data.service';
import { Summary } from '../model/summary';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-summary',
  imports: [MatListModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  public summary: Signal<Summary>;
  public totalDriverChanges = computed(() => {
    return (this.dataService.stints().length - 1) >= 0? this.dataService.stints().length - 1 : 0;
  });

  constructor(private dataService: DataService) {
    this.summary = this.dataService.summary;
  }

  getHours(delta: number): String {
    if (!delta) {
      return '0';
    }
    return Math.floor(delta / 1000 / 60 / 60).toString();
  }

  getMinutes(delta: number): String {
    if (!delta) {
      return '00';
    }
    return Math.floor((delta / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0');
  }
}
