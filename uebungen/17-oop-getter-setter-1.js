// 17-oop-getter-setter-1.ts
/**
 * Aufgaben:
 * Klasse `Rectangle`:
 * - private _width, _height (number)
 * - getter area (number)
 * - setter width/height: Error wenn <= 0
 */
export class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        // TODO
    }
    get height() {
        return this._height;
    }
    set height(value) {
        // TODO
    }
    get area() {
        // TODO
        return 0;
    }
}
