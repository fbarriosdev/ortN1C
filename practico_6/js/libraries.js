function charCount(v1, v2) {
    let count = 0;
    for(let i = 0; i <= v1.length; i++) {
        let retStr = v1.substring(i, (i + 1));
        if (retStr.indexOf(v2) >= 0) count++;
    }
    return count;
}
function charReplaceAll(v1, chars, v3) {
    let retVal = v1;
    chars.forEach((e, i) => {
        retVal = charReplace(retVal, e, v3);
    })
    return retVal;
}
function charReplace(v1, v2, v3) {
    let retVal = "";
    for(let i = 0; i < v1.length; i++) {
            retVal += (v1.charAt(i) === v2) ? v3 : v1.charAt(i);
    }
    return retVal;
}
function splitString(ci, ini, end) {
    return ci.substring(ini, end);
}
function getMatriculaInit(k) {
    let aux = '';
    switch(k) {
        case 'Canelones':
            aux = 'A';
            break;
        case 'Maldonado':
            aux = 'B';
            break;
        case 'Rocha':
            aux = 'C';
            break;
        case 'Treinta y Tres':
            aux = 'D';
            break;
        case 'Cerro Largo':
            aux = 'E';
            break;
        case 'Rivera':
            aux = 'F';
            break;
        case 'Artigas':
            aux = 'G';
            break;
        case 'Salto':
            aux = 'H';
            break;
        case 'Paysandú':
            aux = 'I';
            break;
        case 'Río Negro':
            aux = 'J';
            break;
        case 'Soriano':
            aux = 'K';
            break;
        case 'Colonia':
            aux = 'L';
            break;
        case 'San José':
            aux = 'M';
            break;
        case 'Flores':
            aux = 'N';
            break;
        case 'Florida':
            aux = 'O';
            break;
        case 'Lavalleja':
            aux = 'P';
            break;
        case 'Durazno':
            aux = 'Q';
            break;
        case 'Tacuarembó':
            aux = 'R';
            break;
        case 'Montevideo':
            aux = 'S';
            break;
    }
    return aux;
}//65-90 <-- A-Z, 97-122 <-- a-z
function getUnicode(strVal) {
    let retVal = -1;  
    let unicodeValue = getUnicodeValue(strVal);
    if (unicodeValue >= 65 && unicodeValue <= 90) {
        retVal = 0;
    }
    else
    if (unicodeValue >= 97 && unicodeValue <= 122) {
        retVal = 1;
    }
    return retVal;
}
function getRange(strVal) {
    if (getUnicode(strVal) === 0) nroMayusculas++;
    else
    if (getUnicode(strVal) === 1) nroMinusculas++;
}
function equalInverted(strVal) {
    let inverted = getInverted(strVal);
    if (strVal === inverted) {
        return true;
    }
    return false;
}
function getInverted(strVal) {
    return strVal.toLowerCase().split('').reverse().join('');
}
function getUnicodeValue(strVal) {
    return strVal.charCodeAt(0);
}
function charReplaceAlls(v1, v3) {
    const chars = [".", ",", "-", "_", " ", ";"];
    return charReplaceAll(v1, chars, v3);
}
function replaceAccents(v1) {
    let tildes = "áéíóúÁÉÍÓÚ";
    let sinTildes = "aeiouAEIOU";
    for (let i = 0; i < tildes.length; i++) {
        v1 = charReplace(v1, tildes.charAt(i), sinTildes.charAt(i));
    }
    return v1;
}
/************************ Ejercicio 16 INI ************************/
function validateCi(ci) {
    let retCi = charReplaceAlls(ci.trim(), "");

    if (retCi.length > 7) {
        retCi = splitString(retCi, 0, 7);
    }
    lastDigit = getCheckDigit(retCi);
    
    return retCi.length > 0 ? `${retCi}-${lastDigit}` : ci.validateCi(ci);
}
function getCheckDigit(retCi) {
    let lastDigit = calculateLastDigit(retCi);
    let lastDigitAux = 0;

    if (lastDigit % 10 === 0) lastDigitAux = lastDigit;
    else {
        let auxVal = lastDigit + 1;
        while (lastDigitAux === 0) {
            if (auxVal % 10 === 0) lastDigitAux = auxVal;
            else auxVal++;
        }
    }
    return lastDigitAux - lastDigit;
}
function calculateLastDigit(ci) {
    let calcVal = "2987634";
    let retCi = ci;
    let retVal = 0;
    for (let i = 0; i < retCi.length; i++) {
        retVal += (Number(retCi.charAt(i)) * calcVal.charAt(i));
    }
    return retVal;
}
/************************ Ejercicio 16 END ************************/
/************************ Ejercicio 18 INI ************************/
function validateMatricula(value) {
    let numC = 0;
    let strC = 0;
    for (let i = 0; i < value.length; i++) {
        if (isNaN(value.charAt(i))) strC++;
        else numC++;
    }
    if ((strC === 1 && numC === 6) || (strC === 3 && numC === 4)) return true;
    
    return false;
}
/************************ Ejercicio 18 END ************************/
/*************************** Practico 6 ***************************/
function calculateArrayAverage(arrayObj) {
    let amount = 0;
    for (let i = 0; i < arrayObj.length; i++) {
        amount += Number(arrayObj[i]);
    }
    return amount / arrayObj.length;
}
function getArrayGT20(arrayObj) {
    console.log(arrayObj);
    let retArray = [];
    for (let i = 0; i < arrayObj.length; i++) {
        if (Number(arrayObj[i]) > 20) retArray.push(Number(arrayObj[i]));
    }
    return retArray;
}
function completeArrayWFibonacci(retArray, cut) {
    for (let i = retArray.length; i < 20; i++) {
        let retVal = (retArray[retArray.length - 2] + retArray[retArray.length - 1]);
        if (cut !== 0) {
            if (retVal < cut) retArray.push(retVal);
            else break;
        }
        else retArray.push(retVal);
    }
}
function cleanRepeatedArray(retArray) {
    let strArray = "";
    let newArray = [];
    for (let i = 0; i < retArray.length; i++) {
        if (!(strArray.indexOf(retArray[i]) > -1)) {
            strArray += `${retArray[i]}`;
        }
    }
    for (let i = 0; i < strArray.length; i++) newArray.push(strArray.charAt(i));
    return newArray;
}
function getFromArrayBySubstring(retArray, strVal) {
    strVal = String(strVal).trim();
    let newArray = [];
    for (let i = 0; i < retArray.length; i++) {
        if (retArray[i].charAt(retArray[i].length - 1) === strVal) {
            newArray.push(retArray[i]);
        }
    }
    return newArray;
}
function getFromArrayWithXChars(retArray, strVal) {
    strVal = Number(strVal);
    let newArray = [];
    for (let i = 0; i < retArray.length; i++) {
        if (retArray[i].length === strVal) {
            newArray.push(retArray[i]);
        }
    }
    return newArray;
}
function getFromArrayWithLessChars(retArray) {
    let lowerValue = 0;
    let newArray = [];
    for (let i = 0; i < retArray.length; i++) {
        lowerValue += retArray[i].length;
    }
    lowerValue = Math.round(lowerValue / retArray.length);
    for (let i = 0; i < retArray.length; i++) {
        if (retArray[i].length < lowerValue) {
            newArray.push(retArray[i]);
        }
    } 
    return newArray;
}
function getFromArrayWithLowerValue(retArray, intVal) {
    let newArray = [];
    for (let i = 0; i < retArray.length; i++) {
        if (retArray[i] >= intVal) {
            newArray.push(retArray[i]);
        }
    }
    return newArray;
}
//Prueba ejercicio 12, de esta forma en lugar de validar el primer
//valor dentro de la función le paso el primer valor por parámetro.
console.log(getFromArrayWithLowerValue([10, 9, 8, 12, 5, 11], 10));