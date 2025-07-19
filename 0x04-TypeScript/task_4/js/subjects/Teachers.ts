namespace Subjects {
    export interface Teacher {
            firstName: string;
            lastName: string;
    }
}
// namespace Subjects {....} this defines a namespace called Subjects . Namespaces help organize code , prevent naming collosions and provide a logical grouping for related functionalities. All our subject-related classes amd interfaces will reside within this namespace.
// firstname and lastname are the required properties for any object that implement the teacher interface .