import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  isDarkTheme = signal<boolean>(
    localStorage.getItem('darkMode') === 'true' || false
  );
  dontShowInfoDialog = signal<boolean>(
    localStorage.getItem('dontShowInfoDialog') === 'true' || false
  );

  constructor() {
    effect(() => {
      localStorage.setItem('darkMode', this.isDarkTheme().toString());
    });
    effect(() => {
      localStorage.setItem('dontShowInfoDialog', this.dontShowInfoDialog().toString());
    });
  }

  toggleTheme() {
    this.isDarkTheme.update((current) => !current);
  }

  toggleInfoDialog() {
    this.dontShowInfoDialog.update((current) => !current);
  }
}
