// 20-oop-implements-1.ts
/**
 * Aufgaben:
 * 1) Interface `Serializable` { serialize(): string }
 * 2) Klasse `Note` implements Serializable:
 *    - title, body
 *    - serialize als JSON string
 */
export class Note {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
    serialize() {
        // TODO
        return "";
    }
}
console.log(new Note("A", "B").serialize().includes('"title":"A"') === true);
