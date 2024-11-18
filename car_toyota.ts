import { Car } from './Car';

export class Toyota extends Car {
    constructor(model: string, year: number, color: string, driveType?: string, fuelSystem?: string) {
        super('Toyota', model, year, color, driveType || 'Передний', fuelSystem || 'Бензин');
    }
    public displayInfo(): void {
        console.log(`Описание авто: \nМарка: ${this.brand}\nМодель: ${this.model}\nГод выпуска: ${this.year}\nЦвет: ${this.getColor()}\nПривод: ${this.getDriveType()}\nТопливная система: ${this.getFuelSystem()}`);
    }
}