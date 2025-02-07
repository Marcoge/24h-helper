export class Summary {
  totalTimes: DriverTotal[];
  delta: string;
  heavyTotal: number;

  constructor(driver: DriverTotal[], delta: string) {
    this.totalTimes = driver;
    this.delta = delta;
    this.heavyTotal = 0;
  }
}

export interface DriverTotal {
  driver: string;
  total: number;
}
