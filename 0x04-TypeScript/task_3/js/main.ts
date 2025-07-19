// Import the RowID type and RowElement interface from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD.
// TypeScript will use the type declarations from crud.d.ts for this import.
import * as CRUD from './js/crud';

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Create a const variable named newRowID with the type RowID
// Assign the value returned by the insertRow command.
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow with the type RowElement
// Update the 'row' object by adding an 'age' field set to 23.
// Using the spread operator (...) to create a new object ensures immutability.
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow command with the newRowID and the updatedRow.
CRUD.updateRow(newRowID, updatedRow);

// Finally, call the deleteRow command with the newRowID.
CRUD.deleteRow(newRowID);

// --- Expected Result Verification (from problem description) ---
// The console output will look similar to this when you run the compiled bundle:
// Insert row { firstName: 'Guillaume', lastName: 'Salva' }
// Update row [random_id] { firstName: 'Guillaume', lastName: 'Salva', age: 23 }
// Delete row id [random_id]
