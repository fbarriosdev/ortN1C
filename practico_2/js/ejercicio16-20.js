//Ejercicio 16
document.querySelector('#btnEx16').addEventListener('click', () => {
    let a = Number(document.querySelector('#txtVal16_1').value);
    let b = Number(document.querySelector('#txtVal16_2').value);
    let c = Number(document.querySelector('#txtVal16_3').value);
    let value2 = String(document.querySelector('#txtVal16_4').value);
    let result = '';

    switch (value2) {
        case 'V1':
            if( a > b ) {
                if( a > c ) {
                    result = 'a es el mayor de los 3';
                }
            }
            break;
        case 'V2':
            if (a > b && a > c) result = 'a es el mayor de los 3';
            break;
    }
    document.querySelector('#pResult16').innerHTML = result;
});
//Ejercicio 17
document.querySelector('#btnEx17').addEventListener('click', () => {
    let a = String(document.querySelector('#txtVal17_1').value).toUpperCase();
    if (a < 0 || a > 10) document.querySelector('#pResult17').innerHTML = 'a está fuera de rango';
    else document.querySelector('#pResult17').innerHTML = 'a está dentro de rango';
});
//Ejercicio 18
let result = 0;
let count = 1;
document.querySelector('#btnEx18').addEventListener('click', () => {
    document.querySelector('#pContador18').innerHTML = `Intento ${count}/6.`;
    let a = Number(document.querySelector('#txtVal18_1').value);
    a = isNaN(a) ? 0 : a;

    if (count < 6) {
        count++;
        result = result + a;
    }
    else {
        result = result + a;
        document.querySelector('#pResult18').innerHTML = result;
        count = 1;
        result = 0;
    }
});

//Ejercicio 19
let result2 = 0;
let count2 = 0;
let isMultiple = 0;
let isGreaterThan20 = 0;
let isBothConditions = 0;
document.querySelector('#btnEx19').addEventListener('click', () => {
    let a = Number(document.querySelector('#txtVal19_1').value);
    a = isNaN(a) ? 0 : a;
    if (count2 < 4) {
        calc(a);
        count2++;
    }
    else {
        calc(a);
        document.querySelector('#pResult19').innerHTML = (
            `a: ${a}.<br>
            Múltiples de 5: ${isMultiple}.<br>
            Mayores a 20: ${isGreaterThan20}.<br>
            Ambas condiciones: ${isBothConditions}.`
        );
        count2 = 0;
        result2 = 0;
    }
    function calc(a) {
        isMultiple = (a % 5 === 0) ? isMultiple + 1 : isMultiple;
        isGreaterThan20 = (a > 20) ? isGreaterThan20 + 1 : isGreaterThan20;
        isBothConditions = (a % 5 === 0 && a > 20) ? isBothConditions + 1 : isBothConditions;
    }
});


document.querySelector('#btnEx20').addEventListener('click', () => {
    const sugar = 1;
    const oil = 1;
    const flour = 100;
    let amount = 0;

    let auxSugar = Number(document.querySelector('#txtVal20_1').value);
    let auxOil = Number(document.querySelector('#txtVal20_2').value);
    let auxFlour = Number(document.querySelector('#txtVal20_3').value);

    auxSugar = isNaN(auxSugar) ? 0 : auxSugar;
    auxOil = isNaN(auxOil) ? 0 : auxOil;
    auxFlour = isNaN(auxFlour) ? 0 : auxFlour;

    auxSugar = parseInt(auxSugar / sugar);
    auxOil = parseInt(auxOil / oil);
    auxFlour = parseInt(auxFlour / flour);

    if (auxSugar < auxOil && auxSugar < auxFlour) amount = auxSugar;
    else if (auxOil < auxSugar && auxOil < auxFlour) amount = auxOil;
    else if (auxFlour < auxSugar && auxFlour < auxOil) amount = auxFlour;
    else amount = auxSugar;

    document.querySelector('#pResult20').innerHTML = amount;
});