// 15-oop-constructors-1.ts
/**
 * Aufgaben:
 * 1) Klasse `Timer`:
 *    - start: Date
 *    - optional label?: string
 * 2) Methode `elapsedMs(now = new Date())`
 * 3) Bonus: statische Factory `Timer.startNew(label?)`
 */
export class Timer {
    constructor(start, label) {
        this.start = start;
        this.label = label;
    }
    elapsedMs(now = new Date()) {
        // TODO
        return 0;
    }
    static startNew(label) {
        return new Timer(new Date(), label);
    }
}
