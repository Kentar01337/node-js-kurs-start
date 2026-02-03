// 18-oop-static-1.ts
/**
 * Aufgaben:
 * Klasse `IdFactory`:
 * - static counter (start 1)
 * - static next(prefix = "ID"): string => "ID-1", "ID-2", ...
 * - static reset(): void
 */
export class IdFactory {
    static next(prefix = "ID") {
        // TODO
        return "";
    }
    static reset() {
        // TODO
    }
}
IdFactory.counter = 1;
IdFactory.reset();
console.log(IdFactory.next("P") === "P-1");
console.log(IdFactory.next("P") === "P-2");
