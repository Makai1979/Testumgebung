var tasks = [];

$(document).ready(() => {
    if (localStorage.getItem('tasks') != null)
        tasks = JSON.parse(localStorage.getItem('tasks'));

    renderTasksTable();
    pruefeDatum();
});

function createTask() {
    let task = $('#iTask').val();
    let begin = $('#iBegin').val();
    let end = $('#iEnd').val();

    let newTask = new Task(task, begin, end);
    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasksTable();
    pruefeDatum();
}

function updateTask(index) {
    const task = tasks[index];

    task.task = $('#iTask').val();
    task.begin = $('#iBegin').val();
    task.end = $('#iEnd').val();

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasksTable();
    pruefeDatum();
}

function editTask(index) {
    const task = tasks[index];

    $('#iTask').val(task.task);
    $('#iBegin').val(task.begin);
    $('#iEnd').val(task.end);

    $('#coreInputMask').off('submit').on('submit', function(event) {
        event.preventDefault();
        updateTask(index);
    });

    $('#coreInputMask button[type="submit"]').text('Ändern');

    pruefeDatum();
}

function renderTasksTable() {
    $("table tr:gt(0)").remove();

    for (let i = 0; i < tasks.length; i++) {
        $("tbody").append(`<tr id="row${i}"></tr>`);
        let row = $(`#row${i}`);
        $(row).append(`<td id="thAufgabe">${tasks[i].task}</td>`);
        $(row).append(`<td id="thDate">${tasks[i].begin}</td>`);
        $(row).append(`<td id="thDate">${tasks[i].end}</td>`);
        $(row).append(`<td class="thEnd"><button id="BTN" onclick="deleteTask(${i})">Löschen</button></td>`);
        $(row).append(`<td class="thEnd"><button id="BTN" onclick="editTask(${i})">Edit</button></td>`);
    }
}

class Task {
    constructor(task, begin, end) {
        this.task = task;
        this.begin = begin;
        this.end = end;
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasksTable();
    pruefeDatum();
}


function pruefeDatum() {
    const eintraege = $('td');

    eintraege.each(function() {
        const text = $(this).text();
        const datumPattern = /(\d{4})-(\d{2})-(\d{2})/;

        const match = text.match(datumPattern);

        if (match) {
            const datumString = match[0];
            const zukuenftigesDatum = new Date(datumString);
            const aktuellesDatum = new Date();

            if (zukuenftigesDatum < aktuellesDatum) {
                $(this).css('backgroundColor', 'red');
            }
        }
    });
}
