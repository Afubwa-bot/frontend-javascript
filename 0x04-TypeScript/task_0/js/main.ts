// defining student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
// creating two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
// creating an array of students
const studentsList: Student[] = [student1, student2];

// Create table elements
const table = document.createElement("table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";

headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);
table.appendChild(thead);

//Add rows for each student
const tbody = document.createElement("tbody");
studentsList.forEach(student => {
    const row = document.createElement("tr");
    const firstNamecell = document.createElement("td");
    firstNamecell.textContent = student.firstName;
    
    const locationcell = document.createElement("td");
    locationcell.textContent = student.location;

    row.appendChild(firstNamecell);
    row.appendChild(locationcell);
    
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
