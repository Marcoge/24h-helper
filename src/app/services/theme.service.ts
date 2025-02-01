import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkTheme = signal<boolean>(
    localStorage.getItem('darkMode') === 'true' || false
  );
  
  constructor() {
    effect(() => {
      localStorage.setItem('darkMode', this.isDarkTheme().toString());
    });
  }

  toggleTheme() {
    this.isDarkTheme.update((current) => !current);
  }
}
