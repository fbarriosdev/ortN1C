//Ejercicio 1
document.querySelector("#btnEx1").addEventListener('click', () => {
    const strArray = ['Azul', 'Rojo', 'Amarillo', 'Gris'];
    let numArray = [];
    /*
    strArray.forEach((e) => {
        numArray.push(e.length);
        
    });
    */
    for (let i = 0; i < strArray.length; i++) numArray.push(strArray[i]);
    //document.querySelector('#pResult1').innerHTML = ``;
});
//Ejercicio 2
let arrayEj2 = [];
document.querySelector("#btnEx2").addEventListener('click', () => {
    const pResult = document.querySelector('#pResult2');
    let pResultStr = "Los valores ingresados son: ";
    let strVal = String(document.querySelector('#txtVal2_1').value).trim();

    if (strVal.length > 0) arrayEj2.push(strVal);
    //console.log(arrayEj2);
    for (let i = 0; i < arrayEj2.length; i++) {
        pResultStr += `<br/>${arrayEj2[i]}`;
    }
    pResult.innerHTML = pResultStr;
});
//Ejercicio 3
let arrayEj3 = [];
document.querySelector("#btnEx3_1").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal3_1').value).trim();
    if (strVal.length > 0) arrayEj3.push(strVal);
    
});
document.querySelector("#btnEx3_2").addEventListener('click', () => {
    let pResultStr = "Los valores ingresados son: ";
    const pResult = document.querySelector('#pResult3');
    for (let i = 0; i < arrayEj3.length; i++) {
        pResultStr += `<br/>${arrayEj3[i]}`;
    }
    pResult.innerHTML = pResultStr;
    arrayEj3 = [];
});
//Ejercicio 4
let arrayEj4 = [];
document.querySelector("#btnEx4_1").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal4_1').value).trim();
    if (strVal.length > 0) arrayEj4.push(strVal);
    
});
document.querySelector("#btnEx4_2").addEventListener('click', () => {
    let pResultStr = "Los valores ingresados son: ";
    const pResult = document.querySelector('#pResult4');
    for (let i = 0; i < arrayEj4.length; i++) {
        pResultStr += `<br/>${arrayEj4[i]}`;
    }
    pResultStr += `<br/> El promedio calculado es: ${Math.round(calculateArrayAverage(arrayEj4))}`;
    pResult.innerHTML = pResultStr;
    arrayEj4 = [];
});
//Ejercicio 5
let arrayEj5 = [];
document.querySelector("#btnEx5_1").addEventListener('click', () => {
    let strVal = Number(document.querySelector('#txtVal5_1').value);
    if (strVal > 0) arrayEj5.push(strVal);
});
document.querySelector("#btnEx5_2").addEventListener('click', () => {
    let pResultStr = "Los valores ingresados son: ";
    let retArray = [];

    retArray = getArrayGT20(arrayEj5);
    for (let i = 0; i < retArray.length; i++) {
        pResultStr += `<br/>${retArray[i]}`;
    }

    document.querySelector('#pResult5').innerHTML = pResultStr;
});
//Ejercicio 6
let arrayEj6 = [];
document.querySelector("#btnEx6_1").addEventListener('click', () => {
    let pResultStr = "Los alias ingresados son: ";
    let strVal = String(document.querySelector('#txtVal6_1').value).trim();

    if (strVal.length > 0) {
        let alreadyExist = false;
        for (let i = 0; i < arrayEj6.length; i++) {
            alreadyExist = arrayEj6[i] === strVal ? true : false;
            if (alreadyExist) break;
        }
        if (!alreadyExist) arrayEj6.push(strVal);
    }
    for (let i = 0; i < arrayEj6.length; i++) {
        pResultStr += `<br/>${arrayEj6[i]}`;
    }
    document.querySelector('#pResult6').innerHTML = pResultStr;
});
//Ejercicio 7 A
let arrayEj7 = [];
document.querySelector("#btnEx7_1").addEventListener('click', () => {
    let pResultStr = "Los alias ingresados son: ";
    let strVal = String(document.querySelector('#txtVal7_1').value).trim();

    if (strVal.length > 0) {
        let alreadyExist = false;
        for (let i = 0; i < arrayEj7.length; i++) {
            alreadyExist = arrayEj7[i] === strVal ? true : false;
            if (alreadyExist) break;
        }
        if (!alreadyExist) arrayEj7.push(strVal);
    }
    for (let i = 0; i < arrayEj7.length; i++) {
        pResultStr += `<br/>${arrayEj7[i]}`;
    }
    document.querySelector('#pResult7').innerHTML = `${pResultStr} <br/> Cantidad de registros: ${arrayEj7.length}`;
});
//Ejercicio 7 B
document.querySelector("#btnEx7_2").addEventListener('click', () => {
    let strVal = Number(document.querySelector('#txtVal7_2').value);
    let pResultStr = `El alias correspondiente a la posición ${strVal} es "${arrayEj7[strVal]}".`;
    document.querySelector('#pResult7_2').innerHTML = pResultStr;
});
//Ejercicio 7 C
document.querySelector("#btnEx7_3").addEventListener('click', () => {
    let strVal1 = String(document.querySelector('#txtVal7_3').value).trim();
    let strVal2 = String(document.querySelector('#txtVal7_4').value).trim();
    let pResultStr = "Los alias actualizados son: ";
    for (let i = 0; i < arrayEj7.length; i++) {
        if (arrayEj7[i] === strVal1) arrayEj7[i] = strVal2;
        pResultStr += `<br/>${arrayEj7[i]}`;
    }
    document.querySelector('#pResult7_3').innerHTML = pResultStr;
});
//Ejercicio 8
let arrayEj8 = [1, 1];
document.querySelector("#btnEx8").addEventListener('click', () => {
    let pResultStr = "Los valores actualizados son: ";
    completeArrayWFibonacci(arrayEj8, 0);
    for (let i = 0; i < arrayEj8.length; i++) {
        pResultStr += `<br/>${arrayEj8[i]}`;
    }
    document.querySelector('#pResult8').innerHTML = `${pResultStr} <br/> Cantidad de registros: ${arrayEj8.length}`;
});
//Ejercicio 9
let arrayEj9 = [1, 1];
document.querySelector("#btnEx9").addEventListener('click', () => {
    let pResultStr = "Los valores actualizados son: ";
    completeArrayWFibonacci(arrayEj9, 1000);
    for (let i = 0; i < arrayEj9.length; i++) {
        pResultStr += `<br/>${arrayEj9[i]}`;
    }
    document.querySelector('#pResult9').innerHTML = `${pResultStr} <br/> Cantidad de registros: ${arrayEj9.length}`;
});
//Ejercicio 10
let arrayEj10 = ["a", "b", "c", "b", "d", "a", "e", "c", "c"];
document.querySelector("#btnEx10").addEventListener('click', () => {
    let pResultStr = "Los valores actualizados son: ";
    let newArray = cleanRepeatedArray(arrayEj10);
    for (let i = 0; i < newArray.length; i++) {
        pResultStr += `<br/>${newArray[i]}`;
    }
    document.querySelector('#pResult10').innerHTML = `${pResultStr} <br/> Cantidad de registros: ${newArray.length}`;
});
//Ejercicio 11
let arrayEj11 = ["Gato", "Leon", "Tigre", "Puma", "Pantera", "Lince", "Guepardo", "Leopardo"];
document.querySelector("#btnEx11").addEventListener('click', () => {
    let strVal = String(document.querySelector('#txtVal11_1').value).trim();
    let pResultStr = "Los valores actualizados son: ";
    let newArray = getFromArrayBySubstring(arrayEj11, strVal);
    for (let i = 0; i < newArray.length; i++) {
        pResultStr += `<br/>${newArray[i]}`;
    }
    document.querySelector('#pResult11').innerHTML = `${pResultStr} <br/> Cantidad de registros: ${newArray.length}`;
});