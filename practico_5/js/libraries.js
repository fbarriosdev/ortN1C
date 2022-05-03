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
    console.log(retVal);
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
}