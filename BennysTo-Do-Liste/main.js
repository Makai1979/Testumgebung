var tasks = [];  // Tasks annehmen und storen
var currentEditIndex = -1; // Index Überprüfer

document.addEventListener('DOMContentLoaded', () => {  
    // Local Storage prüfen, ob was da ist und überprüft die einzelnen Schritte
    if (localStorage.getItem('tasks') != null)
        tasks = JSON.parse(localStorage.getItem('tasks'));

    renderTasksTable();
    pruefeDatum();
});

document.addEventListener('click', function(event) {  // click ist onclick
    if (event.target.matches('button[data-index]')) {
        event.preventDefault();
        const index = parseInt(event.target.getAttribute('data-index'));
        editTask(index);
    }
});

function createTask() {
    let task = document.getElementById('iTask').value; // Holt sich die Values aus den HTML-Elementen
    let begin = document.getElementById('iBegin').value; // Holt sich die Values aus den HTML-Elementen
    const beginDatum = new Date(begin).toLocaleDateString("en-GB"); // Übergibt den Wert von begin zu new date und wandelt um
    let end = document.getElementById('iEnd').value;
    const endDatum = new Date(end).toLocaleDateString("en-GB");

    let newTask = new Task(task, beginDatum, endDatum); // erstellt ein neues Array (Liste)
    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));  // die Liste mit den einzelnen Elemente in den Store

    renderTasksTable();
    pruefeDatum();
    resetEntry();
}

function resetEntry() {
    document.getElementById('iBegin').value = "";  // Schlichter Reset
    document.getElementById('iEnd').value = "";
    document.getElementById('iTask').value = "";
}

function updateTask() {  // Überschreiben den letzten Task
    if (currentEditIndex !== -1 && currentEditIndex < tasks.length) {   // Wenn der momentane Index nicht gleich -1 und oder
                                                                        // muss kleiner als die tasks.length passiert...
        const task = tasks[currentEditIndex];  // Letztes Element in dem Array/Liste

        let begin = document.getElementById('iBegin').value; 
        const beginDatum = new Date(begin).toLocaleDateString("en-GB");
        let end = document.getElementById('iEnd').value;
        const endDatum = new Date(end).toLocaleDateString("en-GB");

        task.task = document.getElementById('iTask').value;     // schreibt die Variablen und Konstanten
        task.begin = beginDatum;
        task.end = endDatum;

        localStorage.setItem('tasks', JSON.stringify(tasks));  // die Liste mit den einzelnen Elemente in den Store

        renderTasksTable();
        pruefeDatum();
        resetEntry();

        currentEditIndex = -1; // Reset index after updating
    }
}

function editTask(index) {
    currentEditIndex = index;
    const task = tasks[index];

    document.getElementById('iTask').value = task.task;

    let newBegin = task.begin.split("/");
    let isoBegin = `${newBegin[2]}-${newBegin[1]}-${newBegin[0]}`;
    let newEnd = task.end.split("/");
    let isoEnd = `${newEnd[2]}-${newEnd[1]}-${newEnd[0]}`;

    document.getElementById('iBegin').value = isoBegin;
    document.getElementById('iEnd').value = isoEnd;

    pruefeDatum();
}

function renderTasksTable() {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let rowHtml = `<tr>
                        <td id="thAufgabe">${tasks[i].task}</td>
                        <td id="thDate">${tasks[i].begin}</td>
                        <td id="thDate">${tasks[i].end}</td>
                        <td class="thEnd"><button id="BTN" onclick="deleteTask(${i})">Löschen</button></td>
                        <td class="thEnd"><button id="BTN" data-index="${i}" onclick="editTask(${i})">Edit</button></td>
                       </tr>`;

                       // const editBtn = document.createElement('buttton');    -> kreiert einen Btn
                       // editBtn.classList.add('eigenerBTN')                   -> weißt die Klasse 'eigenerBTN' zu
                       // editBtn = document.querySelector('eigenerBTN')        -> editBTN schaltet sich mit eigenerBTN
                       // editBtn.addEventListener('click', () => {             -> wartet auf den Click und durch die 
                                                                                // => wird eine Funktion ausgeführt
                       //     to something
                       //}}
        tbody.insertAdjacentHTML('beforeend', rowHtml);
    }

    pruefeDatum();
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
    console.log('Löschung erfolgreich!')
}

function pruefeDatum() {
    const eintraege = document.querySelectorAll('td');

    eintraege.forEach(function(td) {
        const text = td.textContent;
        const datumPattern = /(\d{2})\.(\d{2})\.(\d{4})/;

        const match = text.match(datumPattern);

        if (match) {
            const datumString = `${match[3]}-${match[2]}-${match[1]}`;
            const zukuenftigesDatum = new Date(datumString);
            const aktuellesDatum = new Date();

            if (zukuenftigesDatum < aktuellesDatum) {
                td.style.backgroundColor = 'red';
            }
        }
    });
}
