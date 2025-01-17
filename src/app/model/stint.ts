export class Stint {
  id: number;
  driver: string;
  start: string;
  end: string;
  isHeavy: boolean;

  constructor(data: {
    id: number;
    driver: string;
    start: string;
    end: string;
    isHeavy: boolean;
  }) {
    this.id = data.id;
    this.driver = data.driver;
    this.start = data.start;
    this.end = data.end;
    this.isHeavy = data.isHeavy;
  }
}
