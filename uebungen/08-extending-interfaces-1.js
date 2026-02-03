// 08-extending-interfaces-1.ts
/**
 * Aufgaben:
 * 1) `Person` mit: firstName, lastName
 * 2) `Employee` extends Person mit: employeeId, department
 * 3) Implementiere `fullName(p)`
 * 4) Implementiere `employeeLabel(e)` -> "Full Name (#employeeId) - department"
 */
export function fullName(p) {
    return `${p.firstName} ${p.lastName}`;
}
export function employeeLabel(e) {
    return `${fullName(e)} (#${e.employeeId}) - ${e.department}`;
}
console.log(employeeLabel({ firstName: "Max", lastName: "Muster", employeeId: "E-7", department: "IT" }) === "Max Muster (#E-7) - IT");
