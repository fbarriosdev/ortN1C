//Ejercicio 11
document.querySelector('#btnCalculate').addEventListener('click', () => {
    let subTotalValue = Number(document.querySelector('#txt11Val1').value);
    let ivaValue = 22;
    let resultValue;

    subTotalValue = isNaN(subTotalValue) ? 0 : subTotalValue;

    resultValue = (subTotalValue + ((subTotalValue * ivaValue) / 100));

    document.querySelector('#pResult1').innerHTML = (
        (resultValue > 0 ) ? resultValue : 'El valor ingresado no es correcto'
    );
});
//Ejercicio 12
document.querySelector('#btnCalculate1').addEventListener('click', () => {
    let txtHeightValue = Number(document.querySelector('#txtHeightValue').value);
    let txtWeightValue = Number(document.querySelector('#txtWeightValue').value);
    let imcValue = txtWeightValue / (txtHeightValue * txtHeightValue);

    document.querySelector('#pResult2').innerHTML = (
        (imcValue > 0 ) ? imcValue.toFixed(2) : 'Resultado invalido'
    );
});
//Ejercicio 13
let clicksCount = 0;
document.querySelector('#btnClicksCtrl').addEventListener('click', () => {
    clicksCount++;
    document.querySelector('#pResult3').innerHTML = clicksCount;
});
//Ejercicio 14
let increase = 0;
document.querySelector('#btnIncreaseOn3').addEventListener('click', () => {
    increase += 3;
    document.querySelector('#pResult3').innerHTML = increase;
});
document.querySelector('#btnReset').addEventListener('click', () => {
    document.querySelector('#pResult3').innerHTML = '';
});
//Ejercicio 15
let result = 0;
document.querySelector('#btnCalculate2').addEventListener('click', () => {
    result += Number(document.querySelector('#tx15Val').value);
});
document.querySelector('#btnShow').addEventListener('click', () => {
    document.querySelector('#pResult4').innerHTML = result;
});