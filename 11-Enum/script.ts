/**
 * * gibt es nur in TypeScript in verbindung mit Java
 * Enum ist eine Liste mit mehreren Vorgaben von constanten Werten
 */

enum PermissionLevel{
  STUDENT ='student',
  INSTRUCTOR ='instructor',
  ADMIN = 'admin',
}

interface User {
  name: string,
  age: number,
  courses: string[]
};

interface UserExtended extends User {
  // Übergeben der Enum-Liste and die Abfrage zur Kindklasse
  permissionLevel : PermissionLevel;
}


const user1: UserExtended = {
  name: 'Andreas',
  age: 25,
  courses: ['C', 'C++', 'Python', 'TypeScript'],
  permissionLevel: PermissionLevel.ADMIN,
}

console.log(user1);

const user2: UserExtended = {
  name: 'Sabine',
  age: 42,
  courses: ['Java', 'C#'],
  permissionLevel: PermissionLevel.INSTRUCTOR,
}

console.log(user2);
