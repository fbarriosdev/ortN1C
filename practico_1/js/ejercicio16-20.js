//Ejercicio 16
let pointsValue = 0;
document.querySelector('#btnCalculate').addEventListener('click', () => {
    let txtVal = document.querySelector('#txt16Val').value;
    pointsValue += (
        (txtVal === 'G' ? 3 : txtVal === 'E' ? 1 : 0)
    );
    document.querySelector('#pResult1').innerHTML = pointsValue;
});
//Ejercicio 17
let resultF = 0;
let resultC = 0;
document.querySelector('#btnCalculateF').addEventListener('click', () => {
    let txtValue = Number(document.querySelector('#txt17Val').value);
    let farenheight = ((txtValue - 40) / 4) + 50;
    resultF = (farenheight - 32) / 1.8;
});
document.querySelector('#btnCalculateC').addEventListener('click', () => {
    let txtValue = Number(document.querySelector('#txt17Val').value);
    resultC = ((txtValue - 40) / 7) + 10;
});
document.querySelector('#btnShow2').addEventListener('click', () => {
    document.querySelector('#pResult2').innerHTML = (
        `Farenheight: ${resultF.toFixed(3)} <br> Celcius: ${resultC.toFixed(3)}`
    );
});