/// <reference path ="./Teacher.ts"/>

namespace Subjects{
    export class Subject {
       teacher!: Teacher ;
       
       setTeacher (teacher: Teacher): void{
        this .teacher = teacher;
       }
    }
}
// this file defines a base class for all subjects , which will hold information about the teacher assigned to that subject.
