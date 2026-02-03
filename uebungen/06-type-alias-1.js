// 06-type-alias-1.ts
/**
 * Aufgaben:
 * 1) Lege Aliases an:
 *    - Currency = "EUR" | "USD"
 *    - Money = { amountCents: number; currency: Currency }
 * 2) Implementiere `addMoney(a, b)`:
 *    - nur gleiche currency addieren, sonst Error
 */
export function addMoney(a, b) {
    if (a.currency === b.currency) {
        a.amountCents += b.amountCents;
    }
    return a;
}
console.log(addMoney({ amountCents: 100, currency: "EUR" }, { amountCents: 50, currency: "EUR" }).amountCents === 150);
