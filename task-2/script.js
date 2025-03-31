const displayField = document.getElementById('display');
const operationField = document.getElementById('displayOperation');
let currentInput = '';
let prevInput = '';

function append(number){
    currentInput += number ;
    displayField.value = currentInput;
}

function operate(operand){
    if (currentInput == ''){
        return;
    }
    prevInput = currentInput;
    currentInput = '';
    displayField.value = currentInput;
    operationField.value = prevInput + operand;
}

function calculate(){
    currentInput = displayField.value;
    if (currentInput=='' || prevInput == ''){
        return;
    }
    let ans = 0;
    let = operationText = String(operationField.value);
    let operand = operationText.substring(operationText.length - 1);
    if (operand == '+'){
        ans = parseFloat(prevInput) + parseFloat(currentInput);
    }
    else if (operand == '-'){
        ans = parseFloat(prevInput) - parseFloat(currentInput);
    }
    if (operand == '*'){
        ans = parseFloat(prevInput) * parseFloat(currentInput);
    }
    if (operand == '/'){
        ans = parseFloat(prevInput) / parseFloat(currentInput);
    }
    operationField.value = operationField.value + currentInput + "=" + String(ans);
    displayField.value = ans;
    currentInput = ans;
}


function clearField(){
    currentInput = '';
    prevInput = '';
    displayField.value = '';
    operationField.value = '';
}