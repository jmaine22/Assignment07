// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let myEmployee = function (){
    "use strict";
     window.document.getElementById(addForm);
     window.document.getElementById(employees);
}
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount;

// ADD EMPLOYEE
let myForm = form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    e.document.getElementById('id').value;
    e.document.getElementById('name').value;
    e.document.getElementById('extension').value;
    e.document.getElementById('email').value;
    e.document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    // RESET THE FORM
    e.myEmployee.addForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
     employeeCount += 1;

});
// DELETE EMPLOYEE

window.addEventListener("load", function () {
    "use strict";
    myEmployee();
    myForm();

})