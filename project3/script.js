// Select all buttons and the display element
const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

// Variables to keep track of calculator state
let currentInput = '0';
let previousInput = '';
let currentOperator = null;
let shouldResetScreen = false;

// Function to update the calculator display
function updateDisplay() {
    display.textContent = currentInput;
}

// Function to handle numbers and decimals
function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        // Prevent multiple decimals
        if (number === '.' && currentInput.includes('.')) return;
        currentInput += number;
    }
}

// Function to handle operator selection
function chooseOperator(operator) {
    if (currentOperator !== null) {
        // If an operator is already selected, compute the previous step first
        compute();
    }
    previousInput = currentInput;
    currentOperator = operator;
    shouldResetScreen = true;
}

// Function to perform the actual math calculation
function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    // If either input is invalid, don't compute
    if (isNaN(prev) || isNaN(current)) return;

    // Use if-else statements to determine the operation
    if (currentOperator === 'add') {
        computation = prev + current;
    } else if (currentOperator === 'subtract') {
        computation = prev - current;
    } else if (currentOperator === 'multiply') {
        computation = prev * current;
    } else if (currentOperator === 'divide') {
        // Handle division by zero
        if (current === 0) {
            alert('Cannot divide by zero!');
            clear();
            return;
        }
        computation = prev / current;
    } else {
        return;
    }

    // Round to avoid long decimals (e.g. 0.1 + 0.2)
    currentInput = Math.round(computation * 1000000000) / 1000000000;
    currentOperator = null;
    previousInput = '';
    shouldResetScreen = true;
}

// Function to reset the calculator
function clear() {
    currentInput = '0';
    previousInput = '';
    currentOperator = null;
    shouldResetScreen = false;
}

// Function to delete the last character
function deleteNumber() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.toString().slice(0, -1);
    }
}

// Loop through all buttons and add event listeners
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const buttonContent = button.textContent;

        // Determine what type of button was clicked based on its action attribute or class
        if (button.classList.contains('number')) {
            appendNumber(buttonContent);
            updateDisplay();
        } else if (button.classList.contains('operator')) {
            chooseOperator(action);
        } else if (action === 'calculate') {
            compute();
            updateDisplay();
        } else if (action === 'clear') {
            clear();
            updateDisplay();
        } else if (action === 'delete') {
            deleteNumber();
            updateDisplay();
        }
    });
});

