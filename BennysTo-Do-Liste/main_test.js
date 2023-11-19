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
    const beginDatum = new Date(begin).toLocaleDateString("de-DE")
    console.log(beginDatum)
    let end = $('#iEnd').val();
    const endDatum = new Date(end).toLocaleDateString("de-DE")
    console.log(endDatum)

    let newTask = new Task(task, beginDatum, endDatum);
    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasksTable();
    pruefeDatum();
}

function resetEntry() {
    $('#iBegin').val("");
    $('#iEnd').val("");
    $('#iTask').val("");
}

function updateTask(index) {
    const task = tasks[index];

    let begin = $('#iBegin').val();
    const beginDatum = new Date(begin).toLocaleDateString("de-DE")
    console.log(beginDatum)
    let end = $('#iEnd').val();
    const endDatum = new Date(end).toLocaleDateString("de-DE")
    console.log(endDatum)

    task.task = $('#iTask').val();
    task.begin = beginDatum;
    task.end = endDatum;

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasksTable();
    pruefeDatum();
    resetEntry();
}

function editTask(index) {
    const task = tasks[index];
    $('#iTask').val(task.task);

    let newBegin = task.begin.split(".")
    let isoBegin = `${newBegin[2]}-0${newBegin[1]}-${newBegin[0]}`
    console.log(isoBegin)
    let newEnd = task.end.split(".")
    let isoEnd = `${newEnd[2]}-0${newEnd[1]}-${newEnd[0]}`
    console.log(isoEnd)

    $('#iBegin').val(isoBegin);
    $('#iEnd').val(isoEnd);
    $('#coreInputMask').off('submit');
    $('#coreInputMask').on('submit', function(event) {
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
        $(row).append(`<td id="thEnd"><button onclick="deleteTask(${i})">Löschen</button></td>`);
        $(row).append(`<td id="thEnd"><button onclick="editTask(${i})">Edit</button></td>`);
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
        const datumPattern = /(\d{2})-(\d{2})-(\d{4})/;

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