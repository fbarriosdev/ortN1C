//Ejercicio 1
document.querySelector('#btnEx1').addEventListener('click', () => {
    let retVal = "";
    for (let i = 1; i <= 1000; i++) {
        retVal += `<br>${i}`;
    }
    document.querySelector('#pResult1').innerHTML = retVal;
});
//Ejercicio 2
document.querySelector('#btnEx2').addEventListener('click', () => {
    let retVal = "-100";
    for (let i = -99; i <= 10; i++) {
        retVal += `. ${i}`;
    }
    document.querySelector('#pResult2').innerHTML = retVal;
});
//Ejercicio 3
document.querySelector('#btnEx3').addEventListener('click', () => {
    let retVal = "40";
    for (let i = 39; i >= 10; i--) {
        retVal += `. ${i}`;
    }
    document.querySelector('#pResult2').innerHTML = retVal;
});
//Ejercicio 4
document.querySelector('#btnEx4').addEventListener('click', () => {
    let retVal = "20";
    for (let i = 19; i >= -30; i--) {
        retVal += `. ${i}`;
    }
    document.querySelector('#pResult2').innerHTML = retVal;
});
//Ejercicio 5
document.querySelector('#btnEx5').addEventListener('click', () => {
    let retVal = "5";
    for (let i = 6; i <= 450; i++) {
        if (i % 5 === 0) retVal += `. ${i}`;
    }
    document.querySelector('#pResult5').innerHTML = retVal;
});
//Ejercicio 6
document.querySelector('#btnEx6').addEventListener('click', () => {
    let retVal = "-32";
    for (let i = -31; i <= 230; i++) {
        if (i % 4 === 0) retVal += `. ${i}`;
    }
    document.querySelector('#pResult6').innerHTML = retVal;
});
//Ejercicio 7
document.querySelector('#btnEx7').addEventListener('click', () => {
    let retVal = Number(document.querySelector('#txtVal7_1').value);
    let result = "";
    retVal = isNaN(retVal) ? 2 : retVal;
    for (let i = 2; i <= retVal; i++) {
        result += "-";
    }
    document.querySelector('#pResult7').innerHTML = result;
});
//Ejercicio 8
document.querySelector('#btnEx8').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtVal8_1').value);
    let val2 = Number(document.querySelector('#txtVal8_2').value);
    let result = "";
    val1 = isNaN(val1) ? 1 : val1;
    val2 = isNaN(val2) ? 2 : val2;

    if (val1 >= val2) {
        let aux = val1;
        val1 = val2;
        val2 = aux;
    }
    for (let i = val1; i <= val2; i++) {
        result += `<br> ${i}`;
    }
    document.querySelector('#pResult8').innerHTML = result;
});
//Ejercicio 9
document.querySelector('#btnEx9').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtVal9_1').value);
    let val2 = Number(document.querySelector('#txtVal9_2').value);
    let result = 0;
    val1 = isNaN(val1) ? 1 : val1;
    val2 = isNaN(val2) ? 2 : val2;
    for (let i = 1; i <= val2; i++) {
        result += val1;
    }
    document.querySelector('#pResult9').innerHTML = result;
});
//Ejercicio 10
document.querySelector('#btnEx10').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtVal10_1').value);
    let val2 = Number(document.querySelector('#txtVal10_2').value);
    let result = 1;
    val1 = isNaN(val1) ? 1 : val1;
    val2 = isNaN(val2) ? 2 : val2;
    for (let i = val1; i <= val2; i++) {
        result = result * i;
    }
    document.querySelector('#pResult10').innerHTML = result;
});