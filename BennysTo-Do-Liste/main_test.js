// Definition einer leeren Array-Variablen, die Aufgaben speichert
var tasks = [];

// Variablendeklaration für den aktuellen Bearbeitungsindex, standardmäßig auf -1 gesetzt
var currentEditIndex = -1;

// Event-Listener, der beim Laden des DOM-Inhalts ausgeführt wird
document.addEventListener('DOMContentLoaded', () => {
    // Überprüft, ob im Local Storage gespeicherte Aufgaben vorhanden sind
    if (localStorage.getItem('tasks') != null)
        // Wenn vorhanden, werden die Aufgaben aus dem Local Storage geladen und im "tasks"-Array gespeichert
        tasks = JSON.parse(localStorage.getItem('tasks'));

    // Funktion zum Rendern der Aufgabenliste wird aufgerufen
    renderTasksTable();

    // Funktion zur Überprüfung der Datumsangaben wird aufgerufen
    pruefeDatum();
});

// Event-Listener für Klickereignisse im Dokument
document.addEventListener('click', function(event) {
    // Überprüft, ob das geklickte Element ein Button mit dem Attribut "data-index" ist
    if (event.target.matches('button[data-index]')) {
        // Verhindert die Standardaktion des Buttons
        event.preventDefault();
        // Extrahiert den Indexwert des geklickten Elements
        const index = parseInt(event.target.getAttribute('data-index'));
        // Funktion zum Bearbeiten einer Aufgabe mit dem extrahierten Index wird aufgerufen
        editTask(index);
    }
});

// Funktion zum Erstellen einer neuen Aufgabe
function createTask() {
    // Abrufen der Werte aus den Eingabefeldern für Aufgabe, Beginn und Ende
    let task = document.getElementById('iTask').value;
    let begin = document.getElementById('iBegin').value;
    // Konvertierung der Datumsangaben in das Datumsformat "en-GB"
    const beginDatum = new Date(begin).toLocaleDateString("en-GB");
    let end = document.getElementById('iEnd').value;
    const endDatum = new Date(end).toLocaleDateString("en-GB");

    // Erstellen einer neuen Aufgabeninstanz mit den eingegebenen Daten und Hinzufügen zur "tasks"-Liste
    let newTask = new Task(task, beginDatum, endDatum);
    tasks.push(newTask);

    // Speichern der aktualisierten Aufgabenliste im Local Storage als JSON
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Aktualisieren der Aufgabenliste auf der Webseite
    renderTasksTable();
    // Überprüfen der Datumsangaben für Hervorhebung älterer Datumsangaben
    pruefeDatum();
    // Zurücksetzen der Eingabefelder nach dem Erstellen einer Aufgabe
    resetEntry();
}

// Funktion zum Zurücksetzen der Eingabefelder für Aufgaben nach dem Erstellen oder Aktualisieren
function resetEntry() {
    document.getElementById('iBegin').value = "";
    document.getElementById('iEnd').value = "";
    document.getElementById('iTask').value = "";
}

// Funktion zum Aktualisieren einer vorhandenen Aufgabe
function updateTask() {
    // Überprüft, ob eine Aufgabe bearbeitet wird und der aktuelle Bearbeitungsindex gültig ist
    if (currentEditIndex !== -1 && currentEditIndex < tasks.length) {
        // Abrufen der Aufgabe, die bearbeitet wird
        const task = tasks[currentEditIndex];

        // Abrufen der Werte aus den Eingabefeldern für Aufgabe, Beginn und Ende
        let begin = document.getElementById('iBegin').value;
        const beginDatum = new Date(begin).toLocaleDateString("en-GB");
        let end = document.getElementById('iEnd').value;
        const endDatum = new Date(end).toLocaleDateString("en-GB");

        // Aktualisieren der Aufgabeninformationen mit den neuen Werten
        task.task = document.getElementById('iTask').value;
        task.begin = beginDatum;
        task.end = endDatum;

        // Speichern der aktualisierten Aufgabenliste im Local Storage als JSON
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Aktualisieren der Aufgabenliste auf der Webseite
        renderTasksTable();
        // Überprüfen der Datumsangaben für Hervorhebung älterer Datumsangaben
        pruefeDatum();
        // Zurücksetzen der Eingabefelder nach dem Aktualisieren einer Aufgabe
        resetEntry();

        // Zurücksetzen des Bearbeitungsindex nach dem Aktualisieren
        currentEditIndex = -1;
    }
}

// Funktion zum Bearbeiten einer bestimmten Aufgabe anhand des Indexwertes
function editTask(index) {
    // Festlegen des aktuellen Bearbeitungsindex auf den übergebenen Indexwert
    currentEditIndex = index;
    // Abrufen der Aufgabeninformationen anhand des Indexes
    const task = tasks[index];

    // Setzen der Werte der Eingabefelder mit den Daten der ausgewählten Aufgabe
    document.getElementById('iTask').value = task.task;

    // Konvertierung der Datumsangaben in das ISO-Datumsformat für die Eingabefelder
    let newBegin = task.begin.split("/");
    let isoBegin = `${newBegin[2]}-${newBegin[1]}-${newBegin[0]}`;
    let newEnd = task.end.split("/");
    let isoEnd = `${newEnd[2]}-${newEnd[1]}-${newEnd[0]}`;

    // Setzen der Datumswerte in den entsprechenden Eingabefeldern für Beginn und Ende
    document.getElementById('iBegin').value = isoBegin;
    document.getElementById('iEnd').value = isoEnd;

    // Überprüfen der Datumsangaben für Hervorhebung älterer Datumsangaben
    pruefeDatum();
}

// Funktion zum Rendern der Aufgabenliste auf der Webseite
function renderTasksTable() {
    // Abrufen des Tabellenkörpers
    let tbody = document.querySelector('tbody');
    // Leeren des Tabellenkörpers
    tbody.innerHTML = '';

    // Durchlaufen der Aufgabenliste und Erstellen der HTML-Tabellenzeilen für jede Aufgabe
    for (let i = 0; i < tasks.length; i++) {
        let rowHtml = `<tr>
                        <td id="thAufgabe">${tasks[i].task}</td>
                        <td id="thDate">${tasks[i].begin}</td>
                        <td id="thDate">${tasks[i].end}</td>
                        <td class="thEnd"><button id="BTN" onclick="deleteTask(${i})">Löschen</button></td>
                        <td class="thEnd"><button id="BTN" data-index="${i}" onclick="editTask(${i})">Edit</button></td>
                       </tr>`;
        // Hinzufügen der erstellten Tabellenzeile zum Tabellenkörper
        tbody.insert
    }
}