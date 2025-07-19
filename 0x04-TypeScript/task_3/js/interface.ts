// Define a type alias for RowID as a number
export type RowID = number;

// Define the RowElement interface
export interface RowElement {
  firstName: string; // Required first name as a string
  lastName: string;  // Required last name as a string
  age?: number;      // Optional age as a number
}