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
//Ejercicio 12
let nroMayusculas = 0;
let nroMinusculas = 0;
document.querySelector("#btnEx12").addEventListener('click', () => {
    nroMayusculas = 0;
    nroMinusculas = 0;    
    let strVal = String(document.querySelector('#txtVal12_1').value);
    let strValAux = charReplace(strVal, " ", "").trim();

    for (let i = 0; i < strValAux.length; i++) {
        getRange(strValAux.charAt(i));
    }
    //console.log(`String: ${strValAux} - Mayus: ${nroMayusculas} - Minus: ${nroMinusculas}`);

    document.querySelector('#pResult12').innerHTML = `String: ${strValAux} - Mayus: ${nroMayusculas} - Minus: ${nroMinusculas}`;
});
//Ejercicio 13
document.querySelector("#btnEx13").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal13_1').value);
    let result = "";
    let inverted = "";

    //strVal = charReplace(strVal.trim().toLowerCase(), " ", "");
    strVal = charReplaceAlls(strVal.trim().toLowerCase(), "");
    strVal = replaceAccents(strVal);
    inverted = getInverted(strVal);

    console.log("1 - " + strVal);
    console.log("2 - " + inverted);
    console.log(equalInverted(strVal));

    if (!equalInverted(strVal)) {
        result = "El texto no es un Palíndromo.";
    }
    else {
        for (let i = 0; i < strVal.length; i++) {

            let str1 = strVal.charAt(i);
            let str2 = inverted.charAt(i);

            if (getUnicodeValue(str1) !== getUnicodeValue(str2)) {
                
                result = "Hay uno o más carácteres que no coinciden."
            }
        }
        if (result === "") {
            result = "El texto es un Palíndromo.";

        }
    }
    document.querySelector('#pResult13').innerHTML = result;
});
//Ejercicio 14
document.querySelector("#btnEx14").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal14_1').value);
    let pos0 = strVal.substring(0, 1);
    let result = 0;

    result = charCount(strVal, pos0);

    document.querySelector('#pResult14').innerHTML = `La primer letra "${pos0}" se repite ${result} veces.`;
});
//Ejercicio 15
document.querySelector("#btnEx15").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal15_1').value);
    let result = -1;
    let inverted = getInverted(strVal.trim());

    for (let i = 0; i < inverted.length; i++) {
        if (inverted.charAt(i) === "a") {
           result = i; 
           break;
        }
    }
    document.querySelector('#pResult15').innerHTML = `La letra "a" se encuentra por ultima vez en ${result}.`;
});
//Ejercicio 16
document.querySelector("#btnEx16").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal16_1').value);

    document.querySelector('#pResult16').innerHTML = `Documento: ${validateCi(strVal)}.`;
});
//Ejercicio 17
document.querySelector("#btnEx17").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal17_1').value);
    let strAux = replaceAccents(strVal.trim());
    let inverted = `0${getInverted(charReplaceAlls(strAux, ""))}`;

    let totalRes = 0;
    let totalImp = 0;
    let total = 0;

    //console.log(Number(strAux));
    //console.log(Number(inverted));

    for (let i = 0; i < inverted.length; i++) {
        let charVal = Number(inverted.charAt(i));

        if (i % 2 !== 0) {
            let restVal = 0;
            let decVal = 0;

            charVal = (charVal * 2);
            restVal = charVal > 9 ? (charVal % 10) : charVal;
            decVal = charVal > 9 ? 1 : 0;
                
            totalRes += decVal + restVal;
        }
        else {
            totalImp += (charVal);
        }
    }
    console.log(totalImp);
    console.log(totalRes);
    total = totalImp + totalRes;
    console.log(`<<<<< ${total}`);
    total = ((total * 9) % 10);
    console.log(`>>>>> ${total}`);

    //document.querySelector('#pResult17').innerHTML = `Documento: ${validateCi(strVal)}.`;
});
//Ejercicio 18
document.querySelector("#btnEx18").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal18_1').value);

    let isValid = validateMatricula(charReplaceAlls(strVal.trim(), ""));
    document.querySelector('#pResult18').innerHTML = `Matrícula: ${isValid ? "valida" : "invalida"}.`;
});