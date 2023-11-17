// let score = 0; // Integer
// let price = 3.49; // Float
// let name = "Benny"; // String
// let isTrue = true; // Boolean

let score = 0;
let currentQuestionIndex = 0;

// Objekt (question) Anfang
// Frage { : "",
// Mögliche Antworten : ["",""],
// Richtige Antworten : }
// Objekt Ende


let questions = [ // Array (Variable) mit Objekten (in den {}) mit drei propertys (Frage, Antwort und die korrekte Lösung)
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        //          0        1       2        3
        answer: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 2
    },
    {
        question: "Welche Farbe hat eine Zitrone?",
        //          0        1       2        3
        answer: ["Gelb", "Grün", "Blau", "Rot"],
        correctAnswer: 0
    },
    {
        question: "Wie viele Beine hat ein Hund?",
        //          0        1       2        3
        answer: ["3", "5", "2", "4"],
        correctAnswer: 3
    }
];

function displayQuestion() { // das ist eine Funktion
    
    if(currentQuestionIndex >= questions.length){ // Prüft wie ob der Durchlauf beendet ist und geht zurück

        document.getElementById('quiz-container').hidden = true; // Der Quiz-Container wird versteckt
        document.getElementById('result').hidden = false; // Das Resultat wird angezeit
        document.getElementById('score').textContent = score; // Die erreichte Punktzahl wird angezeigt
        return;
    }
    
    let question = questions[currentQuestionIndex]; // siehe oben

    document.getElementById('question').textContent = question.question; // Objekt.Unterobjekt

    let answersDiv = document.getElementById("answers"); // Den Array mit dem Button füllen
    answersDiv.innerHTML = ""; // Löscht die Antworten der Frage zuvor wenn Funktion ausgeführt wird

    question.answer.forEach((answer, index) => { // Funktion der Erstellung eines Buttons mit forEach-Schleife
        let answerButton = document.createElement('button'); // Erstelle ein Element im HTML für jede Antwort
        answerButton.classList.add("btn", "btn-dark", "me-2") // Button-Design aus Bootstrap ziehen + "me-2" als Abstand
        answerButton.textContent = answer;  // Text des Buttons sind die möglichen Antworten
        answerButton.onclick = () => checkAnswer(index); // Prüfen auf welches Element geklickt wurde
        answersDiv.appendChild(answerButton); // Weieren Button hinzufügen
    });
}

displayQuestion(); // Darstellung der Funktion

function checkAnswer(userAnswer){ // Prüfen der korrekten Antwort über den "userAnswer"
    let correctAnswer = questions[currentQuestionIndex].correctAnswer; // Die korrekte Antwort des entsprechenden Index holen

    if(userAnswer == correctAnswer){ // Wenn die korrekte Antwort angegeben wurde... (= exakt gleich / == stimmen Werte überein? )
        score += 1; // ...wird ein Punkt hinzugefügt
    }

    nextQuestion(); // Aufrufen der Funktion nextQuestion
}

function nextQuestion (){ // Nächste Frage laden
    currentQuestionIndex += 1; // Index um eine Zahl erhöhen
    displayQuestion(); // Darstellung der Funktion
}