function charCount(v1, v2) {
    let count = 0;
    for(let i = 0; i <= v1.length; i++) {
        let retStr = v1.substring(i, (i + 1));
        if (retStr.indexOf(v2) >= 0) count++;
    }
    return count;
}
function charReplace(v1, v2, v3) {
    let retVal = '';
    for(let i = 0; i < v1.length; i++) {
            retVal += (v1.charAt(i) === v2) 
                ? v3 : v1.charAt(i);
    }
    return retVal;
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