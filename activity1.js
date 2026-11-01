let history = document.getElementById("history-value");
let output = document.getElementById("output-value");


function displayNumber() {
    output.innerHTML +=this.id;

}
function displayOperator() {
    let value = this.id;

    if (value == "clear") {
        clearScreen();

    }
    else if (value == "backspace") {
        removeNumber();
    }
    else if (value =="=") {
        calculateResult();

    }
    else if (value == "%") {
        calculatePersentage();

    }
    else {
        addOpertor(value);
    }
 
}
function clearScreen() {
    history.innerHTML = "";
    output.innerHTML = "";


}
function removeNumber() {
    output.innerHTML = output.innerHTML.slice(0,-1);

}

function addOpertor(value) {
    if (output.innerHTML != "") {
        output.innerHTML += value;
    }
}
function calculatePersentage() {
    if (output.innerHTML != "") {
        output.innerHTML = Number(output.innerHTML) /100;
    }

}
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
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", displayNumber);
}
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", displayOperator);
}
