//Ejercicio 1
document.querySelector('#btnConcat').addEventListener('click', () => {
    let result = document.querySelector('#txtName').value;

    if (result.length > 0) {
        result = `${document.querySelector('#txtSurname').value}, ${result}.`;
    }
    document.querySelector('#pResult1').innerHTML = result;
});
//Ejercicio 2
document.querySelector('#btnCalculate1').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtSumVal1').value);
    let val2 = Number(document.querySelector('#txtSumVal2').value);

    val1 = isNaN(val1) ? 0 : val1;
    val2 = isNaN(val2) ? 0 : val2;

    document.querySelector('#pResult2').innerHTML = (val1 + val2);
});
//Ejercicio 3
document.querySelector('#btnCalculate2').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtSum2Val1').value);
    let val2 = Number(document.querySelector('#txtSum2Val2').value);
    let val3 = Number(document.querySelector('#txtSum2Val3').value);

    val1 = isNaN(val1) ? 0 : val1;
    val2 = isNaN(val2) ? 0 : val2;
    val3 = isNaN(val3) ? 0 : val3;

    document.querySelector('#pResult3').innerHTML = (val1 + val2 + val3);
});
//Ejercicio 4
document.querySelector('#btnCalculate3').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtSum4Val1').value);
    let val2 = Number(document.querySelector('#txtSum4Val2').value);

    val1 = isNaN(val1) ? 0 : val1;
    val2 = isNaN(val2) ? 0 : val2;

    document.querySelector('#pResult4').innerHTML = (
        `Suma: ${val1 + val2} <br> Multiplicación: ${val1 * val2}`
    );
});
//Ejercicio 5
document.querySelector('#btnCalculate4').addEventListener('click', () => {
    let val1 = Number(document.querySelector('#txtAreaVal1').value);

    val1 = isNaN(val1) ? 0 : val1;

    document.querySelector('#pResult5').innerHTML = (
        `Area del cuadrado: ${val1 * val1} cm2.`
    );
});