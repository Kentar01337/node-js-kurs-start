"use strict";
/**
 * * gibt es nur in TypeScript in verbindung mit Java
 * Enum ist eine Liste mit mehreren Vorgaben von constanten Werten
 */
var PermissionLevel;
(function (PermissionLevel) {
    PermissionLevel["STUDENT"] = "student";
    PermissionLevel["INSTRUCTOR"] = "instructor";
    PermissionLevel["ADMIN"] = "admin";
})(PermissionLevel || (PermissionLevel = {}));
;
const user1 = {
    name: 'Andreas',
    age: 25,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: PermissionLevel.ADMIN,
};
console.log(user1);
const user2 = {
    name: 'Sabine',
    age: 42,
    courses: ['Java', 'C#'],
    permissionLevel: PermissionLevel.INSTRUCTOR,
};
console.log(user2);
