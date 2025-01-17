import { Injectable, signal } from '@angular/core';
import { Stint } from './model/stint';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  public drivers = signal<string[]>([]);
  public stints = signal<Stint[]>([]);
}
