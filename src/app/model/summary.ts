export class Summary {
  totalTimes: DriverTotal[];
  delta: String;

  constructor(driver: DriverTotal[], delta: String) {
    this.totalTimes = driver;
    this.delta = delta;
  }
}

export interface DriverTotal {
  driver: String;
  total: number;
}
