// ths file defines the React subject , similar to Cpp , but with specific logic for react teaching experience .
// the purpose to provide a concrete React subject implementation , demonstrating how to add specific teaching experience attributes for diff subjects through declaration merging .

/// <reference path ="./Subject.ts"/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number; //optional attribute
    }

    export class React extends Subject {
        getRequirements(): string {
            return "here is the list of requirements for react";
        }
        getAvailableTeacher(): string{
            if (this.teacher.experienceTeachingReact !== undefined && this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
              } else {
                return "No available teacher";
              }
        }
    }
}