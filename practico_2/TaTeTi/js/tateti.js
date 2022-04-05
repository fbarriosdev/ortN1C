//Ejercicio 29 y 30
let count = 0, symbolCount = 0;
let player1 = false, player2 = false;
let player1Symbol = '', player2Symbol = '';
let boxA1 = '';
let boxA2 = '';
let boxA3 = '';
let boxB1 = '';
let boxB2 = '';
let boxB3 = '';
let boxC1 = '';
let boxC2 = '';
let boxC3 = '';

//Setteos iniciales
restart();

document.querySelector('#btnReset').addEventListener('click', () => {
    restart();
});

//Selección de simbolos para cada jugador
document.querySelector('#btnSelectSymbol').addEventListener('click', () => {
    if (symbolCount === 0) {
        player1Symbol = String(document.querySelector('#txtValue').value).toUpperCase();
        symbolCount++;
    }
    else {
        player2Symbol = String(document.querySelector('#txtValue').value).toUpperCase();
        symbolCount--;
    }
    document.querySelector('#p1Value').innerHTML = player1Symbol;
    document.querySelector('#p2Value').innerHTML = player2Symbol;
});

//Cargo los clicks del juego
document.querySelector('#boxA1').addEventListener('click', doAll);
document.querySelector('#boxA2').addEventListener('click', doAll);
document.querySelector('#boxA3').addEventListener('click', doAll);
document.querySelector('#boxB1').addEventListener('click', doAll);
document.querySelector('#boxB2').addEventListener('click', doAll);
document.querySelector('#boxB3').addEventListener('click', doAll);
document.querySelector('#boxC1').addEventListener('click', doAll);
document.querySelector('#boxC2').addEventListener('click', doAll);
document.querySelector('#boxC3').addEventListener('click', doAll);

//Recorro todos los td y obtengo el clickeado
function doAll() {
    if (isEmpty(this)) {
        let activeSymbol = player1 ? player1Symbol : player2Symbol;
        this.innerHTML = activeSymbol;
        saveElementData(this.id, activeSymbol);
        let winner = winnerValidator();
        let control = false;
        if (winner === player1Symbol) {
            document.querySelector('#p3Value').innerHTML = 'Player 1';
            control = true;
        } else
        if (winner === player2Symbol) {
            document.querySelector('#p3Value').innerHTML = 'Player 2';
            control = true;
        }
        if (control) setTimeout(() => restart(), 4000);

        countValidatior();
        count++;
    }
}

function winnerValidator() {

    console.log(`A1:${boxA1} B1:${boxB1} C1:${boxC1}`);
    console.log(`A2:${boxA2} B2:${boxB2} C2:${boxC2}`);
    console.log(`A3:${boxA3} B3:${boxB3} C3:${boxC3}`);

    let reVal = 'null';
    if (boxA1 === boxB1 && boxB1 === boxC1) reVal = boxA1;
    else if (boxA2 === boxB2 && boxB2 === boxC2) reVal = boxA2;
    else if (boxA3 === boxB3 && boxB3 === boxC3) reVal = boxA3;
    else if (boxA1 === boxB2 && boxB2 === boxC3) reVal = boxA1;
    else if (boxA3 === boxB2 && boxB2 === boxC1) reVal = boxA3;
    else if (boxA1 === boxA2 && boxA2 === boxA3) reVal = boxA1;
    else if (boxB1 === boxB2 && boxB2 === boxB3) reVal = boxB1;
    else if (boxC1 === boxC2 && boxC2 === boxC3) reVal = boxC1;
    return reVal;
}

function countValidatior() {
    if (count > 8) restart();
    else setPlayerActive();
}

function restart() {
    //Setteos iniciales
    count = 0;
    player1Symbol = 'X';
    player2Symbol = 'O';
    document.querySelector('#p1Value').innerHTML = player1Symbol;
    document.querySelector('#p2Value').innerHTML = player2Symbol;
    document.querySelector('#p3Value').innerHTML = '';
    document.querySelectorAll('td').forEach(element => {
        element.innerHTML = '';
    });
    //Comienza player1
    player1 = true;
    player2 = !player1;
    boxA1 = '';
    boxA2 = '';
    boxA3 = '';
    boxB1 = '';
    boxB2 = '';
    boxB3 = '';
    boxC1 = '';
    boxC2 = '';
    boxC3 = '';
}

function saveElementData(id, activeSymbol) {
    if (id.indexOf('A1') > 0) boxA1 = activeSymbol;
    if (id.indexOf('A2') > 0) boxA2 = activeSymbol;
    if (id.indexOf('A3') > 0) boxA3 = activeSymbol;

    if (id.indexOf('B1') > 0) boxB1 = activeSymbol;
    if (id.indexOf('B2') > 0) boxB2 = activeSymbol;
    if (id.indexOf('B3') > 0) boxB3 = activeSymbol;

    if (id.indexOf('C1') > 0) boxC1 = activeSymbol;
    if (id.indexOf('C2') > 0) boxC2 = activeSymbol;
    if (id.indexOf('C3') > 0) boxC3 = activeSymbol;
}

function setPlayerActive() {
    player2 = player1;
    player1 = !player1;
}

function isEmpty(el) {
    if (!String(el.innerHTML).length > 0) return true;
    return false;
}