// main.ts
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Create and export constants for subjects
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export a Teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10, // This teacher has C experience
};

console.log("C++");
// Set cTeacher as the teacher for Cpp subject
cpp.setTeacher(cTeacher);
// Log the requirements and available teacher for Cpp
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log("\n"); // Add a newline for better readability

console.log("Java");
// Set cTeacher as the teacher for Java subject
java.setTeacher(cTeacher);
// Log the requirements and available teacher for Java
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log("\n"); // Add a newline for better readability

console.log("React");
// Set cTeacher as the teacher for React subject
react.setTeacher(cTeacher);
// Log the requirements and available teacher for React
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());