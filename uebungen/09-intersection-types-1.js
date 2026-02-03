// 09-intersection-types-1.ts
/**
 * Aufgaben:
 * 1) Definiere:
 *    - WithId = { id: string }
 *    - WithTimestamps = { createdAt: Date; updatedAt: Date }
 *    - Entity = WithId & WithTimestamps
 * 2) Implementiere `touch(entity)` -> updatedAt auf "jetzt" setzen (immutable)
 */
export function touch(e) {
    return { ...e, updatedAt: new Date() };
}
const e1 = { id: "x", createdAt: new Date(0), updatedAt: new Date(0) };
const e2 = touch(e1);
console.log(e1.updatedAt.getTime());
console.log(e2.updatedAt.getTime());
