// 21-oop-abstract-1.ts
/**
 * Aufgaben:
 * 1) Abstract class `Shape` mit abstract area(): number
 * 2) Klassen `Circle`, `Square` erben und implementieren area()
 * 3) Funktion `totalArea(shapes: Shape[]): number`
 */
export class Shape {
}
export class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        // TODO
        return 0;
    }
}
export class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }
    area() {
        // TODO
        return 0;
    }
}
export function totalArea(shapes) {
    // TODO
    return 0;
}
