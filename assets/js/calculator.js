var calcInput = document.getElementById("calcInput");
var operators = ['+', '-', '/', '*'];

calcInput.addEventListener("change", removeColor());

function removeColor() {
    document.getElementById("colorChange").classList.remove("btn-danger");
}

function clearCalc() {
    calcInput.value = "";
}

function addInCalc(val, operand=true) {
    if(operand == false) {
        if(!operators.includes(calcInput.value[calcInput.value.length - 1])) {
            calcInput.value = calcInput.value + val;
        }
    } else {
        calcInput.value = calcInput.value + val;
    }
    removeColor();
}

// Following the minimum requirements
function calculate() {
    let calcIn = calcInput.value;

    if(calcIn.indexOf('*') != -1) {
        var answer = parseInt(calcIn.substring(0, calcIn.indexOf('*'))) * parseInt(calcIn.substring(calcIn.indexOf('*')+1));
    } else if(calcIn.indexOf('/') != -1) {
        var answer = parseInt(calcIn.substring(0, calcIn.indexOf('/'))) / parseInt(calcIn.substring(calcIn.indexOf('/')+1));
    } else if(calcIn.indexOf('-') != -1) {
        var answer = parseInt(calcIn.substring(0, calcIn.indexOf('-'))) - parseInt(calcIn.substring(calcIn.indexOf('-')+1));
    } else if(calcIn.indexOf('+') != -1) {
        var answer = parseInt(calcIn.substring(0, calcIn.indexOf('+'))) + parseInt(calcIn.substring(calcIn.indexOf('+')+1));
    } else {
        var answer = "CALCULATION ERROR";
    }

    if(answer == 27) {
        document.getElementById("colorChange").classList.add("btn-danger");
    }

    calcInput.value = answer;
}
