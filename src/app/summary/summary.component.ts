import { Component, Signal } from '@angular/core';
import { DataService } from '../data.service';
import { Summary } from '../model/summary';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  public summary: Signal<Summary>;
  
  constructor(private dataService: DataService) {
    this.summary = this.dataService.summary;
  }
}
