var tasks = [];

$(document).ready(() => {
    if (localStorage.getItem('tasks') != null)
        tasks = JSON.parse(localStorage.getItem('tasks'));

    renderTasksTable();
    pruefeDatum();
});

function createTask() {
    let task = $('#coreInputTask').val();
    let begin = $('#coreInputBegin').val();
    let end = $('#coreInputEnd').val();

    let newTask = new Task(task, begin, end);
    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasksTable();
    pruefeDatum();
}

function updateTask(index) {
    const task = tasks[index];

    task.task = $('#coreInputTask').val();
    task.begin = $('#coreInputBegin').val();
    task.end = $('#coreInputEnd').val();

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasksTable();
}

function editTask(index) {
    const task = tasks[index];

    $('#coreInputTask').val(task.task);
    $('#coreInputBegin').val(task.begin);
    $('#coreInputEnd').val(task.end);

    $('#coreInputMask').off('submit').on('submit', function(event) {
        event.preventDefault();
        updateTask(index);
    });

    $('#coreInputMask button[type="submit"]').text('Sichern');
}

function renderTasksTable() {
    $("table tr:gt(0)").remove();

    for (let i = 0; i < tasks.length; i++) {
        $("tbody").append(`<tr id="row${i}"></tr>`);
        let row = $(`#row${i}`);
        $(row).append(`<td>${tasks[i].task}</td>`);
        $(row).append(`<td>${tasks[i].begin}</td>`);
        $(row).append(`<td>${tasks[i].end}</td>`);
        $(row).append(`<td><button onclick="deleteTask(${i})">Löschen</button></td>`);
        $(row).append(`<td><button onclick="editTask(${i})">Bearbeiten</button></td>`);
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
