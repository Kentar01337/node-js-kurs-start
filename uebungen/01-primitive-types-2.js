// 01-primitive-types-2.ts
/**
 * Ziel: String/Number/Boolean im Kontext.
 *
 * Aufgaben:
 * 1) Parsen:
 *    Implementiere `parsePrice()`:
 *    - akzeptiere "12.50", "12,50", " 12,50 € "
 *    - gib number zurück (z. B. 12.5)
 *    - bei ungültig: wirf Error
 *
 * 2) Implementiere `formatUserLine()`:
 *    - Input: name (string), age (number), active (boolean)
 *    - Output: "Name (Alter) - aktiv|inaktiv"
 */
export function parsePrice(raw) {
    // TODO
    return 0;
}
export function formatUserLine(name, age, active) {
    // TODO
    return "";
}
console.log(parsePrice("12,50 €") === 12.5);
console.log(formatUserLine("Mia", 20, false) === "Mia (20) - inaktiv");
