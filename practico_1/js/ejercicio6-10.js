//Ejercicio 6
document.querySelector('#btnConvert').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txt6Val1').value);
    let val2 = Number(document.querySelector('#txt6Val2').value);

    val1 = isNaN(val1) ? 0 : val1;
    val2 = isNaN(val2) ? 0 : val2;

    document.querySelector('#pResult1').innerHTML = (
        `U$S ${val1 / val2}.`
    );
});
//Ejercicio 6
document.querySelector('#btnCalculate1').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txt7Val1').value);
    let val2 = Number(document.querySelector('#txt7Val2').value);

    val1 = isNaN(val1) ? 0 : val1;
    val2 = isNaN(val2) ? 0 : val2;

    document.querySelector('#pResult2').innerHTML = (
        `Resto ${val1 % val2}.`
    );
});
//Ejercicio 8
document.querySelector('#btnCalculate2').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txt8Val1').value);
    let val2 = Number(document.querySelector('#txt8Val2').value);
    let val3 = Number(document.querySelector('#txt8Val3').value);

    val1 = isNaN(val1) ? 0 : val1;
    val2 = isNaN(val2) ? 0 : val2;
    val3 = isNaN(val3) ? 0 : val3;

    document.querySelector('#pResult3').innerHTML = ((val1 + val2) - val3);
});
//Ejercicio 9
document.querySelector('#btnCalculate3').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txt9Val1').value);
    let val2 = Number(document.querySelector('#txt9Val2').value);
    let val3 = Number(document.querySelector('#txt9Val3').value);

    val1 = isNaN(val1) ? 0 : val1;
    val2 = isNaN(val2) ? 0 : val2;
    val3 = isNaN(val3) ? 0 : val3;

    document.querySelector('#pResult4').innerHTML = ((val1 * val1) - (val2 + val3));
});
//Ejercicio 10
document.querySelector('#btnCalculate4').addEventListener('click', () => {
    let subTotalValue = Number(document.querySelector('#txt10Val1').value);
    let chargeValue = Number(document.querySelector('#txt10Val2').value);
    let resultValue;

    subTotalValue = isNaN(subTotalValue) ? 0 : subTotalValue;

    resultValue = (subTotalValue + ((subTotalValue * chargeValue) / 100));

    document.querySelector('#pResult5').innerHTML = (
        (resultValue > 0 ) ? resultValue : 'El valor ingresado no es correcto'
    );
});