// 04-any-void-null-undefined-1.ts
/**
 * Aufgaben:
 * 1) Ersetze `any` sinnvoll:
 *    - `parseJson()` soll `unknown` zurückgeben.
 * 2) Implementiere `getTitle()`:
 *    - Input: obj: unknown
 *    - Output: string | undefined
 *    - Wenn obj ein Objekt ist und property "title" string ist -> return title
 * 3) `logAndReturn()`:
 *    - loggt eine Nachricht (void)
 *    - gibt aber zusätzlich einen Wert zurück? -> Entscheide Dich korrekt im Typing.
 */
export function parseJson(json) {
    return JSON.parse(json);
}
export function getTitle(obj) {
    if (typeof obj === "object" &&
        obj !== null &&
        "title" in obj &&
        typeof obj.title === "string") {
        return obj.title;
    }
    return undefined;
}
export function logAndReturn(message) {
    console.log(message);
    return message;
}
console.log(getTitle(parseJson('{"title":"Hi"}')) === "Hi");
console.log(getTitle(parseJson("null")) === undefined);
let t = logAndReturn('Test');
console.log(t);
