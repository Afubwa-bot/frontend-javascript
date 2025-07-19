// Cpp.ts
/// <reference path ="./Subject.ts"/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subjects{
        getRequirements(): string {
            return " Here is the list of the requirements for cpp";
        }
        getAvailableTeacher(): string{
            if (this.teacher.experienceTeachingC !== undefined && this.teacher.experienceTeachingC> 0){
                return 'Available Teacher:${this.teacher.firstname}';
            } else {
                return "No available teacher";
            }
            }
        }
    }
}