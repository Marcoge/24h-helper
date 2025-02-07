import { computed, Injectable, Signal, signal } from '@angular/core';
import { Stint } from '../model/stint';
import { Summary, DriverTotal } from '../model/summary';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public drivers = signal<string[]>([]);
  public stints = signal<Stint[]>([]);

  public summary: Signal<Summary> = computed(() => {
    return this.computeSummary(this.stints());
  });

  private computeSummary(stintList: Stint[]): Summary {
    const summary = new Summary([], '00:00');
    let start: Date;
    let end: Date;
    const drivers = this.drivers();
    const totalMap = new Map<string, number>();
    stintList.forEach((x) => {
      if (
        //special case for stints that start before and end after midnight
        parseInt(x.start.split(':')[0]) >= 22 &&
        parseInt(x.end.split(':')[0]) <= 2
      ) {
        start = new Date(`2021-01-01T${x.start}:00`);
        end = new Date(`2021-01-02T${x.end}:00`);
      } else {
        start = new Date(`2021-01-01T${x.start}:00`);
        end = new Date(`2021-01-01T${x.end}:00`);
      }
      const totalTime = end.getTime() - start.getTime();
      if (x.isHeavy) {
        summary.heavyTotal += totalTime;
      }
      if (!totalMap.has(x.driver)) {
        totalMap.set(x.driver, totalTime);
      } else {
        totalMap.set(x.driver, totalMap.get(x.driver)! + totalTime);
      }
    });
    drivers.forEach((y) => {
      summary.totalTimes.push({ driver: y, total: totalMap.get(y)! || 0 });
    });
    summary.delta = this.calculateDelta(summary.totalTimes);
    return summary;
  }

  private calculateDelta(totalTimes: DriverTotal[]): string {
    let truncDriver = totalTimes;
    if (totalTimes.length > 5) {
      truncDriver = totalTimes.slice(0, 5);
    }
    const min = Math.min(...truncDriver.map((x) => x.total));
    const max = Math.max(...truncDriver.map((x) => x.total));
    const delta = max - min;
    const hours = Math.floor(delta / 1000 / 60 / 60);
    const minutes = Math.floor(delta / 1000 / 60) - hours * 60;
    if (delta > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')} 
      hh:mm`;
    } else {
      return '00:00 hh:mm';
    }
  }
}
