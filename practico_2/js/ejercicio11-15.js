//Ejercicio 11
document.querySelector('#btnEx11').addEventListener('click', () => {
    let value1 = Number(document.querySelector('#txtVal1').value);
    let value2 = Number(document.querySelector('#txtVal2').value);
    let value3 = String(document.querySelector('#txtVal3').value).toUpperCase();
    let result = 0;
    let type = '';

    value1 = isNaN(value1) ? 0 : value1;
    value2 = isNaN(value2) ? 0 : value2;

    switch (value3) {
        case 'S':
            result = value1 + value2;
            type = 'Suma';
            break;
        case 'R':
            result = value1 - value2;
            type = 'Resta';
            break;
        case 'M':
            result = value1 * value2;
            type = 'Multiplicación';
            break;
        case 'D':
            result = value1 / value2;
            type = 'División';
            break;
        default:
            document.querySelector('#pResult11').innerHTML = 'Sin coincidencias.';
            break;
    }
    document.querySelector('#pResult11').innerHTML = `${type}: ${result}.`;
});
//Ejercicio 12
document.querySelector('#btnEx12').addEventListener('click', () => {
    let value1 = String(document.querySelector('#txtVal12_1').value).toUpperCase();
    let type = '';

    switch (value1) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            type = 'Es';
            break;
        default:
            type = 'No es';
            break;
    }
    document.querySelector('#pResult12').innerHTML = `${type} vocal.`;
});
//Ejercicio 13
document.querySelector('#btnEx13').addEventListener('click', () => {
    let value1 = Number(document.querySelector('#txtVal13_1').value);
    let value2 = Number(document.querySelector('#txtVal13_2').value);

    value1 = isNaN(value1) ? 0 : value1;
    value2 = isNaN(value2) ? 0 : value2;

    document.querySelector('#pResult13').innerHTML = (
        `${value1 % value2 === 0?'Es' : 'No es'} múltiplo.`
    );
});
//Ejercicio 14
document.querySelector('#btnEx14').addEventListener('click', () => {
    let value1 = Number(document.querySelector('#txtVal14_1').value);
    let value2 = document.querySelector('#txtVal14_2').value;
    let destino = '';

    /*
    60.000 millas - Europa (destino lejano)
    30.000 millas - América del Norte (destino intermedio)
    15.000 millas — América del Sur (destino cercano)
    */

    value1 = isNaN(value1) ? 0 : value1;

    if (value2 === 'Si') value1 = value1 * 2;

    if (value1 < 15000) {
       destino = 'No dispone de millas suficientes!';
    } else 
    if (value1 >= 15000) {
        if (value1 >= 30000) {
            //Si llega a 30000, sigo validando.
            if (value1 >= 60000) {
                //Si llega a 60000, sigo validando.
                destino = 'Europa';
            }
            else {
                destino = 'América del Norte';
            }
        }
        else {
            destino = 'América del Sur';
        }
    }

    document.querySelector('#pResult14').innerHTML = (
        `${value1 < 15000 ? destino : 'El destino más lejano es: ' + destino + '.'}`
    );
});
//Ejercicio 15
document.querySelector('#btnEx15').addEventListener('click', () => {
    let value1 = String(document.querySelector('#txtVal15_1').value).toUpperCase();
    let value2 = String(document.querySelector(`#txtVal15_1 option[value=${value1}]`).innerHTML);
    document.querySelector('#pResult15').innerHTML = `Departamento seleccionado: ${value2}`;
});