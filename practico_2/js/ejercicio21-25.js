//Ejercicio 21
const incomes = 20000;
const years = 7;
document.querySelector('#btnEx21').addEventListener('click', () => {
    let clientIncomes = Number(document.querySelector('#txtVal21_1').value);
    let houseCost = Number(document.querySelector('#txtVal21_2').value);
    let firstPayment = 0;
    let payments = 0;
    let = percentage = 15;

    if (clientIncomes >= incomes) percentage = 30;

    firstPayment = (houseCost * percentage) / 100;
    payments = Number(((houseCost - firstPayment) / 12) / 7).toFixed(2);

    document.querySelector('#pResult21').innerHTML = (
        `Costo Casa ${houseCost} <br> Ingresos ${clientIncomes} <br> Primer pago ${firstPayment} <br> Valor de cuota ${payments}`
    );
});
//Ejercicio 22
document.querySelector('#btnEx22').addEventListener('click', () => {
    const discount = 4;
    let a = Number(document.querySelector('#txtVal22_1').value);
    let b = String(document.querySelector('#txtVal22_2').value);

    if ((b === 'D' || b === 'C') && a < 510000) {
        a = a - ((a * discount) / 100);
    }

    document.querySelector('#pResult22').innerHTML = `Total a pagar ${a}`;
});