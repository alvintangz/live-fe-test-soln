var calcInput = document.getElementById("calcInput");
var colorChange = document.getElementById("colorChange");

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
}

// Following the minimum requirements
function calculate() {
    colorChange.classList.remove("btn-danger");

    var calcIn = calcInput.value;

    try {
        var answer = eval(calcIn);
    } catch(e) {
        var answer = "error";
    }

    if(answer == 27) {
        colorChange.classList.add("btn-danger");
    }

    calcInput.value = answer;
}
