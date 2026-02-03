// 19-oop-generic-class-1.ts
/**
 * Aufgaben:
 * Implementiere `Box<T>`:
 * - private value?: T
 * - set(v: T): void
 * - get(): T | undefined
 * - isEmpty(): boolean
 */
export class Box {
    set(v) {
        // TODO
    }
    get() {
        // TODO
        return undefined;
    }
    isEmpty() {
        // TODO
        return true;
    }
}
const b = new Box();
console.log(b.isEmpty() === true);
b.set(5);
console.log(b.get() === 5);
