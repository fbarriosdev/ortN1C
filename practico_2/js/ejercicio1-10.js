//Ejercicio 1
document.querySelector('#btnEx1').addEventListener('click', () => {
    let value = Number(document.querySelector('#txtValue').value);
    document.querySelector('#pResult').innerHTML = (
       (value >= 0 ? 'Positivo' : 'Negativo')
    );
});
//Ejercicio 2
document.querySelector('#btnEx2').addEventListener('click', () => {
    let value = Number(document.querySelector('#txtValue').value);
    document.querySelector('#pResult').innerHTML = (
       (value > 10 ? 'Es mayor que diez' : '')
    );
});
//Ejercicio 3
document.querySelector('#btnEx3').addEventListener('click', () => {
    let value = Number(document.querySelector('#txtValue').value);
    document.querySelector('#pResult').innerHTML = (
       (value > 20 ? 'Es mayor que 20' : 'Es menos o igual a 20')
    );
});
//Ejercicio 4
document.querySelector('#btnEx4').addEventListener('click', () => {
    let value = Number(document.querySelector('#txtValue').value);
    document.querySelector('#pResult').innerHTML = (
       (value < 0 ? (value * -1) : value)
    );
});
//Ejercicio 5
document.querySelector('#btnEx5').addEventListener('click', () => {
    let value = Number(document.querySelector('#txtValue').value);
    document.querySelector('#pResult').innerHTML = (
       (value < 20 ? value > 10 ? 'Cumple' : 'No cumple' : 'No cumple')
    );
});
//Ejercicio 6
document.querySelector('#btnEx6').addEventListener('click', () => {
    let value = Number(document.querySelector('#txtValue').value);
    let isMultiple = (
        (value % 7 === 0) && (value % 3 === 0)
    );
    document.querySelector('#pResult').innerHTML = (
       (isMultiple ? 'Cumple' : 'No cumple')
    );
});
//Ejercicio 7
document.querySelector('#btnEx7').addEventListener('click', () => {
    let value = Number(document.querySelector('#txtValue').value);
    document.querySelector('#pResult').innerHTML = (
       (value > 20 ? 'Cumple' : value < -20 ? 'Cumple' : 'No cumple')
    );
});
//Ejercicio 8
document.querySelector('#btnEx8').addEventListener('click', () => {
    let value = Number(document.querySelector('#txtValue').value);
    document.querySelector('#pResult').innerHTML = (
       (value > 30 ? 'Mayor a treinta' : value < 10 ? 'Menor que diez' : 'Entre diez y treinta')
    );
});
//Ejercicio 9
document.querySelector('#btnEx9').addEventListener('click', () => {
    let value = Number(document.querySelector('#txtTemperature').value);
    let day = document.querySelector('#txtDay').value;
    const firstAct = 'Levantarse';
    console.log(day);
    let secondAct = value < 10 ? 'Abrigarse mucho' : value > 20 ? 'Ponerse ropa comoda' : 'Abrigo moderado';

    document.querySelector('#pResult1').innerHTML = (
       `1. ${firstAct}.<br>2. ${secondAct}.<br>3. ${day === 'Domingo' ? 'Quedarse en casa' : 'Ir al trabajo'}.`
    );
});
//Ejercicio 10
document.querySelector('#btnEx10').addEventListener('click', () => {
    let value1 = Number(document.querySelector('#txtVal1').value);
    let value2 = Number(document.querySelector('#txtVal2').value);
    let result = 0;
    value1 = isNaN(value1) ? 0 : value1;
    value2 = isNaN(value2) ? 0 : value2;

    if (value1 > value2) {
        result = value1 - value2;
    } else 
    if (value1 < value2) {
        result = value2 - value1;
    }
    else {
        result = 0;
    }
    document.querySelector('#pResult2').innerHTML = result;
});