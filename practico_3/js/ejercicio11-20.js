//Ejercicio 11
document.querySelector('#btnEx11').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtVal11_1').value);
    let val2 = Number(document.querySelector('#txtVal11_2').value);
    let val3 = Number(document.querySelector('#txtVal11_3').value);
    let result = "";

    val1 = isNaN(val1) ? 1 : val1;
    val2 = isNaN(val2) ? 2 : val2;
    val3 = isNaN(val3) ? 2 : val3;

    for (let i = val1; i <= val2; i++) {
        if (i % val3 === 0) result += `<br> ${i}`;
    }
    document.querySelector('#pResult11').innerHTML = result;
});
//Ejercicio 12
document.querySelector('#btnEx12').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtVal12_1').value);
    let result = 1;
    val1 = isNaN(val1) ? 1 : val1;
    for (let i = 1; i <= val1; i++) {
        result = result * i;
    }
    document.querySelector('#pResult12').innerHTML = result;
});
//Ejercicio 13
let ancho = 0;
let alto = 0;
let total = '';

document.querySelector('#btnEx13').addEventListener('click', () => {
    total = '';
    ancho = Number(document.querySelector('#txtVal13_1').value);
    alto = Number(document.querySelector('#txtVal13_2').value);
    for (let i = 0; i < alto; i++) {
        for (let j = 0; j < ancho; j++) {
            total += 'X';
        }
        total += '<br>';
    }
    document.querySelector('#pResult13').innerHTML = total;
});
//Ejercicio 14
document.querySelector('#btnEx14').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtVal14_1').value);
    let result = val1;
    let count = 0;
    val1 = isNaN(val1) ? 1 : val1;
    while(result >= 1) {
        result /= 10;
        count++;
    }
    document.querySelector('#pResult14').innerHTML = `El número tiene ${count} dígitos`;
});
//Ejercicio 15
document.querySelector('#btnEx15').addEventListener('click', () => {
    document.querySelector('#pResult15').innerHTML = '';
    let val1 = Number(document.querySelector('#txtVal15_1').value);
    let result = 0;
    val1 = isNaN(val1) ? 0 : val1;
    if (val1 < 2000) {
        val1 = 0;
    }
    if (val1 === 0) {
        document.querySelector('#pResult15').innerHTML = 'Intente con un valor superior a 2000.';
    }
    else {
        result = val1;
        while(result >= 100) {
            result /= 20;
        }
        document.querySelector('#pResult15').innerHTML = result;
    }
});
//Ejercicio 16
document.querySelector('#btnEx16').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtVal16_1').value);
    let val2 = Number(document.querySelector('#txtVal16_2').value);
    let result = 0;
    for (let i = val1; i <= val2; i++) {
        if ((i % 4 === 0) && (i % 6 === 0)) {
            result = i;
        }
    }
    document.querySelector('#pResult16').innerHTML = result;
});
//Ejercicio 17
/*document.querySelector('#btnEx17').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtVal17_1').value);
    let val2 = Number(document.querySelector('#txtVal17_2').value);
    let result = 0;
    for (let i = val1; i <= val2; i++) {
        if ((i % 4 === 0) && (i % 6 === 0)) {
            result = i;
        }
    }
    document.querySelector('#pResult17').innerHTML = result;
});*/

//Ejercicio 20
/*let lastDividendo = 0;
let lastDivisor = 0;
let lastResto = 0;
let lastCociente = 0;
let resultado = 0;
let strResultado = ''; 
document.querySelector('#btnEx20').addEventListener('click', () => {
    let actDividendo = Number(document.querySelector('#txtVal20_1').value);
    let actDivisor = Number(document.querySelector('#txtVal20_2').value);
    let actResto = 0;
    //let act



    document.querySelector('#pResult13').innerHTML = total;
});*/