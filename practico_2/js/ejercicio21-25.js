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
//Ejercicio 23
let approved = 0;
let reproved = 0;
let approvedWith90 = 0;
document.querySelector('#btnEx23_1').addEventListener('click', () => {
    const min = 70;
    const max = 90;

    let a = Number(document.querySelector('#txtVal23_1').value);

    if (a > min) {
        approved++;
        if (a > max) approvedWith90++;
    }
    else {
        reproved++;
    }
});
document.querySelector('#btnEx23_2').addEventListener('click', () => {
    document.querySelector('#pResult23').innerHTML = (
        `Aprobados: ${approved}.<br> Reprobados: ${reproved}.<br> Con más de 90: ${approvedWith90}.`
    );
});
//Ejercicio 24
let salariesAmount = 0;
let employees = 0;
let lowerSalary = Number.POSITIVE_INFINITY;
document.querySelector('#btnEx24_1').addEventListener('click', () => {

    let a = Number(document.querySelector('#txtVal24_1').value);

    salariesAmount = salariesAmount + a;
    employees++;
    if (a < lowerSalary) lowerSalary = a;
});
document.querySelector('#btnEx24_2').addEventListener('click', () => {
    document.querySelector('#pResult24').innerHTML = (
        `Total Sueldos: ${salariesAmount}.<br> Cantidad Empleados: ${employees}.<br> Sueldo más bajo: ${lowerSalary}.`
    );
});
//Ejercicio 25
let totalPedidos = 0;
let stockInicial = 0;
let nombreCliente = 0;
let pedidosCount = 0;
let pedidosMax = Number.NEGATIVE_INFINITY;
let isEmpty = false;
document.querySelector('#btnEx25_0').addEventListener('click', () => {
    stockInicial = Number(document.querySelector('#txtVal25_1').value);
});
document.querySelector('#btnEx25_1').addEventListener('click', () => {
    let nombre = document.querySelector('#txtVal25_2').value;
    let cantidad = Number(document.querySelector('#txtVal25_3').value);
    let msgFinal =  ``;
    let msgError =  `Stock insuficiente! No pudimos procesar el pedido.`;
    log(`stockInicial ${stockInicial}`);
    log(`Nombre ${nombre} - Cantidad ${cantidad}`);
    if (stockInicial !== 0 && cantidad <= stockInicial) {
        if (cantidad > pedidosMax) {
            pedidosMax = cantidad;
            nombreCliente = nombre;
        }
        stockInicial -= cantidad;
        pedidosCount++;

        log(`pedidosMax ${pedidosMax}`);
        log(`nombreCliente ${nombreCliente}`);
        log(`pedidosCount ${pedidosCount}`);
        log(`stockInicial ${stockInicial}`);
    }
    else isEmpty = true;
    if (stockInicial === 0) {
        isEmpty = true;
        document.querySelector('#btnEx25_1').setAttribute('disabled', 'disabled');
    }
    log(`isEmpty ${isEmpty}`);

    if (isEmpty) {
        msgFinal = msgError;
    }
    else msgFinal = `Cantidad de pedidos procesados: ${pedidosCount}<br>Cliente: ${nombreCliente}.`
    document.querySelector('#pResult25').innerHTML = msgFinal;
});
//Ejercicio 26
const precio = 40;
document.querySelector('#btnEx26_1').addEventListener('click', () => {
    let freeDays = 0;
    let noches = Number(document.querySelector('#txtVal26_1').value);
    let payMethod = String(document.querySelector('#txtVal26_2').value).toLowerCase();
    let total = noches;
    
    log('noches: ' + noches);
    log('freeDays: ' + freeDays);

    if (noches > 7) {
        total += 2;
        freeDays += 2;
    } else
    if (noches > 3) {
        total += 1;
        freeDays += 1;
    }

    if (payMethod === 't') {
        total++;
        freeDays++;
    }
    log('noches: ' + noches);
    log('freeDays: ' + freeDays);

    document.querySelector('#pResult26').innerHTML = (
        `Noches de regalo ${freeDays}<br>
        Días de alojamiento ${total}<br>
        Total a pagar ${noches * precio}`
    );
});
//Ejercicio 26
let numJugador1 = 0;
let turno = 0;
document.querySelector('#btnEx27_1').addEventListener('click', () => {
    turno++;
    document.querySelector('#pJugador').innerHTML = `Turno Jugador ${turno > 0 ? 2 : 1}`; 
    numJugador1 = document.querySelector('#txtVal27_1').value;
});
document.querySelector('#btnEx27_2').addEventListener('click', () => {
    let num = document.querySelector('#txtVal27_2').value;
    let res = 0;
    let msg = '';
    let turnPass = false;

    if (num === numJugador1) res = num;
    else if(numJugador1 > num) res = numJugador1 - num;
    else res = num - numJugador1;

    if (res === numJugador1) {
        msg = 'Adivinaste!';
        if (turnPass === 1) turno = 0;
    } else
    if (res > 15) {
        msg = 'Estas lejos!';
    } else
    if (res >= 10) {
        msg = 'Te estas acercando!';
    } else
    if (res >= 5) {
        msg = 'Cada vez más cerca!';
    } else
    if (res > 0) {
        msg = 'Muy pero muy cerca!';
    }
    document.querySelector('#pResult27').innerHTML = msg;
});

function log(t) {
    console.log(t);
}