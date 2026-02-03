// 14-oop-property-modifiers-1.ts
/**
 * Aufgaben:
 * 1) Erstelle Klasse `BankAccount`:
 *    - owner: string (readonly)
 *    - balanceCents: number (private)
 * 2) Methoden:
 *    - deposit(cents)
 *    - withdraw(cents) (Error wenn nicht genug)
 *    - getBalanceEuro(): string
 */
export class BankAccount {
    constructor(owner, initialCents = 0) {
        this.owner = owner;
        this.balanceCents = initialCents;
    }
    deposit(cents) {
        // TODO
    }
    withdraw(cents) {
        // TODO
    }
    getBalanceEuro() {
        // TODO
        return "";
    }
}
