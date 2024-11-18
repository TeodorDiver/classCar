export class Car {
    public brand: string;
    public model: string;
    public year: number;
    private color: string;
    protected driveType: string;
    protected fuelSystem: string;

    constructor(brand: string, model: string, year: number, color: string, driveType: string, fuelSystem: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.driveType = driveType;
        this.fuelSystem = fuelSystem;
    }

    public getColor(): string {
        return this.color;
    }

    public changeColor(newColor: string): void {
        this.color = newColor;
        console.log(`Цвет авто изменен на ${this.color}`);
    }

    public getDriveType(): string {
        return this.driveType;
    }

    public getFuelSystem(): string {
        return this.fuelSystem;
    }
}

