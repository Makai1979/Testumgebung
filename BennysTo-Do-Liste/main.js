

var tasks = [];

$(document).ready(() => {
    if (localStorage.getItem('tasks') != null)  // != -> Ungleich
        tasks = JSON.parse(localStorage.getItem('tasks'));

    renderTasksTable();
    pruefeDatum();

})

function createTask() {
    console.log("Create Task");

    let task = $('#coreInputTask').val();
    let begin = $('#coreInputBegin').val();
    let end = $('#coreInputEnd').val();
    let del = $('#coreInputDelete').val();
    let edit = $('#coreInputEdit').val();

    let newTask = new Task(task, begin, end, del, edit);
    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasksTable();
    pruefeDatum();
}

function renderTasksTable() {
    // delete all rows that contain tasks
    $("table tr:gt(0)").remove();

    // render/create rows for all tasks
    for (let i = 0; i < tasks.length; i++) {

        $("tbody").append("<tr></tr>");
        let row = $("tr:last");
        $(row).append("<td id='thAufgabe'>" + tasks[i].task + "</td>");
        $(row).append("<td data-datum='tasks[i].begin.value' id='thDate'>" + tasks[i].begin + "</td>");
        $(row).append("<td data-datum='tasks[i].end.value' id='thDate'>" + tasks[i].end + "</td>");
        $(row).append('<td id="thEnd"><button onclick="deleteTask(' + i + ')">Löschen</button></td>');
        $(row).append('<td id="thEnd"><button onclick="editTask(' + i + ')">Edit</button></td>');
    }
}


class Task {

    constructor(task, begin, end, del, edit) {
        this.task = task;
        this.begin = begin;
        this.end = end;
        this.del = del;
        this.edit = edit;
    }

}

// Definiere die Funktion pruefeDatum
function pruefeDatum() {
    // Suche alle td-Elemente im DOM
    const eintraege = document.querySelectorAll('td');

    // Iteriere durch jedes td-Element
    eintraege.forEach(eintrag => {
        // Hole den Textinhalt des aktuellen td-Elements
        const text = eintrag.textContent;

        // Definiere ein Muster, um nach dem Datumsformat YYYY-MM-DD zu suchen
        const datumPattern = /(\d{4})-(\d{2})-(\d{2})/; // YYYY-MM-DD pattern

        // Suche nach dem Datumsmuster im Text des td-Elements
        const match = text.match(datumPattern);

        // Wenn ein Datumsmatch gefunden wurde
        if (match) {
            // Extrahiere das gefundene Datum im String-Format (z. B. "YYYY-MM-DD")
            const datumString = match[0];

            // Konvertiere das gefundene Datum in ein Date-Objekt
            const zukuenftigesDatum = new Date(datumString);
            const aktuellesDatum = new Date(); // Aktuelles Datum erhalten

            // Vergleiche das gefundene Datum mit dem aktuellen Datum
            if (zukuenftigesDatum < aktuellesDatum) {
                // Wenn das gefundene Datum in der Vergangenheit liegt, ändere die Hintergrundfarbe des td-Elements in rot
                eintrag.style.backgroundColor = 'red';
            }
        }
    });
}


function deleteTask(index) {  // index ist das i von dem erzeugten Task
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasksTable();
}
