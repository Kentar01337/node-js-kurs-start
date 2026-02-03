// 02-array-tuple-2.ts
/**
 * Tuple-Übung:
 * Wir modellieren Koordinaten als Tuple.
 *
 * Aufgaben:
 * 1) Definiere `type Point2D = [number, number]`.
 * 2) Implementiere `distance(a, b)` mit Pythagoras.
 * 3) Implementiere `translate(p, dx, dy)` -> neuer Punkt.
 */
export function distance(a, b) {
    // TODO
    return 0;
}
export function translate(p, dx, dy) {
    // TODO
    return p;
}
console.log(Math.round(distance([0, 0], [3, 4])) === 5);
console.log(translate([1, 1], 2, -1).join(",") === "3,0");
