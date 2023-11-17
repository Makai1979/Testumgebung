

var tasks = [];

$(document).ready(() => {
    if(localStorage.getItem('tasks') != null)  // != -> Ungleich
        tasks = JSON.parse(localStorage.getItem('tasks'));

    renderTasksTable();

})

function createTask(){
    console.log("Create Task");

    let task = $('#coreInputTask').val();
    let begin = $('#coreInputBegin').val();
    let end = $('#coreInputEnd').val();
    let OK = $('#coreInputDelete').val();

    let newTask = new Task (task, begin, end, OK);
    tasks.push(newTask);

    localStorage.setItem('tasks',JSON.stringify(tasks));

    renderTasksTable();

}

function renderTasksTable(){
    // delete all rows that contain tasks
    $("table tr:gt(0)").remove();

    // render/create rows for all tasks
    for(let i =0; i < tasks.length; i++){

        $("tbody").append("<tr></tr>");
        let row = $("tr:last");
        $(row).append("<td id='thAufgabe'>" + tasks[i].task + "</td>");
        $(row).append("<td id='thDate'>" + tasks[i].begin + "</td>");
        $(row).append("<td id='thDate'>" + tasks[i].end + "</td>");
        $(row).append('<td id="thEnd"><button onclick="deleteTask(' + i + ')">Löschen</button></td>');

    }
}

class Task {

    constructor (task, begin, end, OK) {
        this.task = task;
        this.begin = begin;
        this.end = end;
        this.OK = OK;
    }

}

function deleteTask(index){  // index ist das i von dem erzeugten Task
    tasks.splice(index, 1); 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasksTable();
}
