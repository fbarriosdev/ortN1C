//Ejercicio 1
document.querySelector("#btnEx1").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal1_1').value);
    document.querySelector('#pResult1').innerHTML = strVal.split('').reverse().join('');
});
//Ejercicio 2
document.querySelector("#btnEx2").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal2_1').value);
    let strVal2 = String(document.querySelector('#txtVal2_2').value);
    let count = charCount(strVal1, strVal2);
    document.querySelector('#pResult2').innerHTML = count;
});
//Ejercicio 3
document.querySelector("#btnEx3").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal3_1').value);
    let strVal2 = 'aeiou';
    let count = 0;
    for (let i = 0; i < strVal2.length; i++) {
        let retStr = strVal2.substring(i, (i + 1));
        count += (charCount(strVal1, retStr));
    }
    document.querySelector('#pResult3').innerHTML = count;
});
//Ejercicio 4
document.querySelector("#btnEx4").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal4_1').value);
    document.querySelector('#pResult4').innerHTML = strVal1.toLowerCase();
});
//Ejercicio 5
document.querySelector("#btnEx5").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal5_1').value);
    document.querySelector('#pResult5').innerHTML = strVal1.toUpperCase();
});
//Ejercicio 6
document.querySelector("#btnEx6").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal6_1').value);
    let strVal2 = String(document.querySelector('#txtVal6_2').value);
    document.querySelector('#pResult6').innerHTML = (
        `${(strVal1.indexOf(strVal2) > -1) ? "Es subcadena" : "No es subcadena"}`
    );
});
//Ejercicio 7
document.querySelector("#btnEx7").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal7_1').value);
    let count = charCount(strVal1.trim(), ' ') + 1;
    document.querySelector('#pResult7').innerHTML = count;
});
//Ejercicio 8
document.querySelector("#btnEx8").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal8_1').value);
    let result = false;
    if(strVal1.substring(0, 1) === strVal1.substring((strVal1.length - 1), strVal1.length)) {
        result = true;
    }
    document.querySelector('#pResult8').innerHTML = result;
});
//Ejercicio 9
document.querySelector("#btnEx9").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal9_1').value);
    let result = 'SX-5456';
    let aux = getMatriculaInit(strVal1) + result;
    document.querySelector('#pResult9').innerHTML = aux;
});
//Ejercicio 10
document.querySelector("#btnEx10").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal10_1').value);
    let strVal2 = String(document.querySelector('#txtVal10_2').value);
    let result = charReplace(strVal1, strVal2, '*');
    document.querySelector('#pResult10').innerHTML = result;
});
//Ejercicio 11
document.querySelector("#btnEx11").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal11_1').value).trim().toLowerCase();
    document.querySelector('#pResult11').innerHTML = strVal1.charAt(0).toUpperCase() + strVal1.slice(1);
});