var students = [];

$(document).ready(() => {
    if(localStorage.getItem('students') != null)  // != -> Ungleich
        students = JSON.parse(localStorage.getItem('students'));

    renderStudentsTable();

})



function createStudent(){
    console.log("Create Student");

    let prename = $('#inputPrename').val();
    let lastname = $('#inputLastname').val();
    let id = $('#inputId').val();

    /*console.log(prename);
    console.log(lastname);
    console.log(id);*/

    let newStudent = new Student(prename, lastname, id);
    students.push(newStudent);

    localStorage.setItem('students',JSON.stringify(students));

    renderStudentsTable();

}

function renderStudentsTable(){
    // delete all rows that contain students
    $("table tr:gt(0)").remove();

    // render/create rows for all students
    for(let i =0; i < students.length; i++){

        $("tbody").append("<tr></tr>");
        let row = $("tr:last");
        $(row).append("<td>" + students[i].prename + "</td>");
        $(row).append("<td>" + students[i].lastname + "</td>");
        $(row).append("<td>" + students[i].id + "</td>");

    }
}

class Student {

    constructor (prename, lastname, id) {
        this.prename = prename;
        this.lastname = lastname;
        this.id = id;
    }

}