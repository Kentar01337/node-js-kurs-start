/**
 * * gibt es nur in TS
 * * Enum: Liste mit mehreren Vorgaben von konstanten Werten
 */

enum PermissionLevel {
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin',
  GUEST = 'guest',
}

interface User {
  name: string,
  age: number,
  courses: string[]
};

interface UserExtended extends User {
  permissionLevel: PermissionLevel;
};

const user1: UserExtended = {
  name: 'Andreas',
  age: 25,
  courses: ['C', 'C++', 'Python', 'TypeScript'],
  permissionLevel: PermissionLevel.ADMIN,
};

console.log(user1);

const user2: UserExtended = {
  name: 'Sabine',
  age: 42,
  courses: ['Java', 'C#'],
  permissionLevel: PermissionLevel.GUEST,
};

console.log(user2);
