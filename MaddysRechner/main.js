document.addEventListener('DOMContentLoaded', function() {
    let currentInput = '';
    let previousInput = '';
    let operation = null;
    const display = document.querySelector('.calc-display p');

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function handleNumber(number) {
        currentInput += number;
        updateDisplay();
        console.log("handleNumber: Aktuelle Eingabe = " + currentInput + ". Die Eingabe davor war " + previousInput + ".")

    }

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
        console.log("handleOperation: Aktuelle Eingabe = " + op + ". Die Eingabe davor war " + previousInput + ".")
    }

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
            case 'X':
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
        console.log("performCalculation: Aktuelle Eingabe = " + currentInput + 
        ". Die Eingabe davor war " + previousInput + ".Das Ergenis ist " + result + ".")
    }
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.id.replace('button-', '');

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