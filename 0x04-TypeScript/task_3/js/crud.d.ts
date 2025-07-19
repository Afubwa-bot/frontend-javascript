// Import the types from the interface.ts file
import { RowID, RowElement } from '../interface';

// Declare a module for './js/crud' to match how it will be imported in main.ts
// This tells TypeScript that when you import from './js/crud', these are the types available.
declare module './js/crud' {
  /**
   * Inserts a new row into the database.
   * @param row The RowElement object to insert.
   * @returns The ID of the newly inserted row.
   */
  export function insertRow(row: RowElement): RowID;

  /**
   * Deletes a row from the database by its ID.
   * @param rowId The ID of the row to delete.
   */
  export function deleteRow(rowId: RowID): void; // 'void' indicates no return value

  /**
   * Updates an existing row in the database.
   * @param rowId The ID of the row to update.
   * @param row The updated RowElement object.
   * @returns The ID of the updated row.
   */
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
