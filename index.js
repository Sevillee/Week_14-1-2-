
function getResultSum(){

    let arg1 = Number(document.querySelector('#sumArg1').value);
    let arg2 = Number(document.querySelector('#sumArg2').value);

    document.getElementById('sumResult').value = arg1 + arg2;
} 

function getResultMinus(){

    let arg1 = Number(document.querySelector('#minusArg1').value);
    let arg2 = Number(document.querySelector('#minusArg2').value);

    document.getElementById('minusResult').value = arg1 - arg2;
} 

function getResultMultiply(){

let arg1 = Number(document.querySelector('#multiplyArg1').value);
let arg2 = Number(document.querySelector('#multiplyArg2').value);

document.getElementById('multiplyResult').value = arg1 * arg2;
} 

function getResultDivide(){

let arg1 = Number(document.querySelector('#divideArg1').value);
let arg2 = Number(document.querySelector('#divideArg2').value);

document.getElementById('divideResult').value = arg1 / arg2;
} 
