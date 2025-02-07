import { effect, inject, Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  /**
   * The state protection variables are a workaround for the fact that the effects are triggered
   * on startup and would overwrite the local storage with empty arrays losing the saved states.
   */
  private dataService = inject(DataService);
  private stateProtectionOnLoadDriver = true;
  private stateProtectionOnLoadStint = true;

  private driverStorageEffect = effect(() => {
    if (
      this.dataService.drivers().length > 0 ||
      !this.stateProtectionOnLoadDriver
    ) {
      localStorage.setItem(
        'drivers',
        JSON.stringify(this.dataService.drivers())
      );
      this.stateProtectionOnLoadDriver = false;
    }
  });

  private stintStorageEffect = effect(() => {
    if (
      this.dataService.stints().length > 0 ||
      !this.stateProtectionOnLoadStint
    ) {
      localStorage.setItem('stints', JSON.stringify(this.dataService.stints()));
      this.stateProtectionOnLoadStint = false;
    }
  });

  public loadFromStorage() {
    this.dataService.drivers.set(
      localStorage.getItem('drivers')
        ? JSON.parse(localStorage.getItem('drivers')!)
        : []
    );
    this.dataService.stints.set(
      localStorage.getItem('stints')
        ? JSON.parse(localStorage.getItem('stints')!)
        : []
    );
  }
}
