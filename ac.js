
let history = document.getElementById("history-value");

let output = document.getElementById("output-value");

let numbers = document.getElementsByClassName("number");

let operators = document.getElementsByClassName("operator");

// Function to display numbers

function displayNumber() {

    output.innerHTML += this.id;

}

// Function to display operators

function displayOperator() {

    let value = this.id;

    if (value == "clear") {

        clearScreen();

    }

    else if (value == "backspace") {

        removeNumber();

    }

    else if (value == "=") {

        calculateResult();

    }

    else if (value == "%") {

        calculatePercentage();

    }

    else {

        addOperator(value);

    }

}

// Function to clear the calculator

function clearScreen() {

    history.innerHTML = "";

    output.innerHTML = "";

}

// Function to remove the last character

function removeNumber() {

    output.innerHTML = output.innerHTML.slice(0, -1);

}

// Function to add operators

function addOperator(value) {

    if (output.innerHTML != "") {

        output.innerHTML += value;

    }

}

// Function to calculate percentage

function calculatePercentage() {

    if (output.innerHTML != "") {

        output.innerHTML = Number(output.innerHTML) / 100;

    }

}

// Function to calculate result

function calculateResult() {

    try {

        let expression = output.innerHTML;

        history.innerHTML = expression;

        let result = eval(expression);

        if (result == Infinity || isNaN(result)) {

            output.innerHTML = "Error";

        }

        else {

            output.innerHTML = result;

        }

    }

    catch {

        output.innerHTML = "Error";

    }

}

// Add click events to number buttons

for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener("click", displayNumber);

}

// Add click events to operator buttons

for (let i = 0; i < operators.length; i++) {

    operators[i].addEventListener("click", displayOperator);

}