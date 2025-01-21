export class Summary {
  totalTimes: DriverTotal[];
  delta: String;
  heavyTotal: number;

  constructor(driver: DriverTotal[], delta: String) {
    this.totalTimes = driver;
    this.delta = delta;
    this.heavyTotal = 0;
  }
}

export interface DriverTotal {
  driver: String;
  total: number;
}
