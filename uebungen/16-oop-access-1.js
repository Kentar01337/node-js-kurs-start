// 16-oop-access-1.ts
/**
 * Aufgaben:
 * 1) Base-Klasse `LoggerBase`:
 *    - protected prefix: string
 *    - private count: number (wie oft geloggt)
 *    - public log(msg): void -> console.log(`${prefix}${msg}`) und count++
 *    - public getCount(): number
 *
 * 2) Subklasse `TaggedLogger`:
 *    - constructor(tag) setzt prefix: `[tag] `
 */
export class LoggerBase {
    constructor(prefix = "") {
        this.count = 0;
        this.prefix = prefix;
    }
    log(msg) {
        // TODO
    }
    getCount() {
        // TODO
        return 0;
    }
}
export class TaggedLogger extends LoggerBase {
    constructor(tag) {
        super(`[${tag}] `);
    }
}
