/// <reference path="./Subject.ts" />

namespace Subjects {
    // Declaration merging: Add experienceTeachingJava to the Teacher interface
    export interface Teacher {
      experienceTeachingJava?: number; // Optional attribute
    }
  
    export class Java extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Java";
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingJava !== undefined && this.teacher.experienceTeachingJava > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }