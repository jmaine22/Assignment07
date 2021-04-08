function init(){
    // GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
    let myEmployee = (e) => {
        "use strict";
        e.document.getElementById(addForm);
        e.document.getElementById('employees');
    }
    console.log(myEmployee);
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    let employeeCount;
// ADD EMPLOYEE
    addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    addForm.e.document.getElementById('id').value;
    addForm.e.document.getElementById('name').value;
    addForm.e.document.getElementById('extension').value;
    addForm.e.document.getElementById('email').value;
    addForm.e.document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = myEmployee.employees.insertRow();
    console.log(row);
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(cellID.createTextNode());
    // CREATE THE DELETE BUTTON

    // RESET THE FORM
    e.myEmployee.addForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
     employeeCount += 1;

});
// DELETE EMPLOYEE
}


window.addEventListener("load", init);