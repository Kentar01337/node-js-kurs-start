// 11-enum-1.ts
/**
 * Aufgaben:
 * 1) Erstelle enum `OrderStatus` (Draft, Paid, Shipped, Cancelled)
 * 2) Implementiere `canShip(status)`:
 *    - true nur bei Paid
 * 3) Implementiere `nextStatus(status)`:
 *    - Draft -> Paid
 *    - Paid -> Shipped
 *    - sonst bleibt gleich
 */
export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Draft"] = "draft";
    OrderStatus["Paid"] = "paid";
    OrderStatus["Shipped"] = "shipped";
    OrderStatus["Cancelled"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
export function canShip(status) {
    // TODO
    return false;
}
export function nextStatus(status) {
    // TODO
    return status;
}
console.log(canShip(OrderStatus.Paid) === true);
console.log(nextStatus(OrderStatus.Draft) === OrderStatus.Paid);
