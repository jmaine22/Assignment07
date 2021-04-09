function init(){
    // GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
    let myEmployee = (e) => {
        "use strict";
        e.document.getElementById('addForm');
        e.document.getElementById('employees');
    }
    console.log(myEmployee);
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    let employeeCount;
// ADD EMPLOYEE
    myEmployee.e.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let myId = addForm.e.document.getElementById('id').value;
    let myName = addForm.e.document.getElementById('name').value;
    let myExtension = addForm.e.document.getElementById('extension').value;
    let myEmail = addForm.e.document.getElementById('email').value;
    let myDepartment = addForm.e.document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = myEmployee.employees.insertRow();
    console.log(row);
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(myId, myName, myExtension, myEmail, myDepartment);
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(cellID.createTextNode());
    // CREATE THE DELETE BUTTON

    // RESET THE FORM
    e.myEmployee.addForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    myId.focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
     employeeCount += 1;

});
// DELETE EMPLOYEE
}


window.addEventListener("load", init);