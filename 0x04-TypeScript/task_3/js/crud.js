// Function to insert a row, logs the row and returns a random ID
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

// Function to delete a row by its ID, logs the ID
export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return; // This function does not return a value
}

// Function to update a row, logs the ID and the updated row, returns the ID
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}