/* Stellt sicher das die Eventlistener bei DokumentInitialisierung 
geladen werden (nicht unbedeingt notwendig) */
document.addEventListener('DOMContentLoaded', function() {

    // Input Variablen
    let currentInput = '';
    let previousInput = '';
    let operation = null;

    const display = document.querySelector('.calc-display');


    // Updated das Display mit jeder neuen Eingabe
    function updateDisplay() {
        display.textContent = currentInput;
    }

    /* Funktion die die Zahlen reactiv dem aktuellen Input hinzufügt und 
    im Display zeigt, mit Funktion (update Display function) */
    function handleNumber(number) {
        currentInput += number;
        updateDisplay();
    }

    // Überprüft ob beide Werte zur Kalkulation vorliegen
    function handleOperation(op) {
        if (!previousInput || operation === null) {
            previousInput = currentInput;
            currentInput = '';
            operation = op;
        } else {
            performCalculation();
            operation = op;
            previousInput = currentInput;
            currentInput = '';
        }
    }

        /* Berechnungsfunktion mit Switch Case, nutzt die vorhergehende und 
        aktuelle Zahl um diese zu berrechnen */
        function performCalculation() {
            let result;
            let prev = parseFloat(previousInput);
            let current = parseFloat(currentInput);
    
            switch (operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current !== 0) {
                        result = prev / current;
                    } else {
                        result = 'Error';
                    }
                    break;
                case 'x²':
                    result = Math.pow(prev, 2);
                    break;
                case '²x':
                    result = Math.pow(2, prev);
                    break;
                case '1/x':
                    if (prev !== 0) {
                        result = 1 / prev;
                    } else {
                        result = 'Error';
                    }
                    break;
                default:
                    return;
            }
    
            currentInput = result.toString();
            updateDisplay();
            operation = null;
        }

            // Erstellt einen Eventlistener für alle Buttons im Tastenfeld
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.id.replace('button-', '');

            // TODO muss gefixt werden da komma nicht funktioniert
            if (!isNaN(value) || value === ',') {
                handleNumber(value === ',' ? '.' : value);
            } else if (value === 'C' || value === 'CE') {
                currentInput = '';
                previousInput = '';
                operation = null;
                updateDisplay();
            } else if (value === '=') {
                performCalculation();
            } else {
                handleOperation(value);
            }
        });
    });
});