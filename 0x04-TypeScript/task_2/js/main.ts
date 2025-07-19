// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  // Check if salary is a number and less than 500
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    // Otherwise, return a Director (including when salary is a string or >= 500)
    return new Director();
  }
}

// --- New Functions for Employee Specific Tasks ---

/**
 * Type predicate to check if an employee is a Director.
 * @param employee The employee object to check.
 * @returns True if the employee is a Director, otherwise false.
 */
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

/**
 * Executes the specific work task for an employee based on their role.
 * @param employee The employee object (Director or Teacher).
 * @returns A string describing the work being done.
 */
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    // If not a Director, it must be a Teacher based on the function's type signature
    return employee.workTeacherTasks();
  }
}

// Define the String literal type named Subjects
type Subjects = 'Math' | 'History';

/**
 * Teaches a specific class based on the provided subject.
 * @param todayClass The subject of the class, restricted to 'Math' or 'History'.
 * @returns A string indicating which subject is being taught.
 */
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  // This part is technically unreachable if `todayClass` strictly adheres to `Subjects` type,
  // but good practice to have a fallback or throw an error for unexpected values in more complex scenarios.
  // For this exercise, the `if/else if` covers all possible `Subjects` values.
  return `Unknown subject: ${todayClass}`;
}
