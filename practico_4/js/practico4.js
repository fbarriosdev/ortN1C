//Ejercicio 1
function getNumerosPares(n1, n2) {
    let results = 0;
    for(let i = n1; i <= n2; i++) {
        if (i % 2 === 0) {
            results ++;
        }
    }
    return results;
}
//Ejercicio 2
function esMayor(edad, tope) {
    if (edad > tope) return alert("No es mayor!");
    else return alert("Es mayor!");
}
//Ejercicio 3
function esBisiesto(year) {
    year = isNaN(Number(year)) ? 0 : year;
    let retVal = false;
    if (year !== 0 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))) retVal = true;
    return retVal;
}
//Ejercicio 4
function calcularAreaTriangulo(base, altura) {
    base = isNaN(base) ? 0 : (base > 0 ? base : 0);
    altura = isNaN(altura) ? 0 : (altura > 0 ? altura : 0);

    if (base !== 0 && altura !== 0) {
        return ((base * altura) / 2);
    }
    else return -1;
}
//Ejercicio 5
function calcularAreaRectangulo(ancho, altura) {
    ancho = isNaN(ancho) ? 0 : (ancho > 0 ? ancho : 0);
    altura = isNaN(altura) ? 0 : (altura > 0 ? altura : 0);

    if (ancho !== 0 && altura !== 0) {
        return (ancho * altura);
    }
    else return -1;
}
//Ejercicio 6
function celsiusToFahrenheit(from) {
    let retVal = isNaN(from) ? 0 : from;
    return ((1.8 * retVal) + 32);
}
//Ejercicio 7
function convertFarenheightTo(from, to) {
    let retVal = isNaN(from) ? 0 : from;
    if (retVal !== 0) {
        switch (to) {
            case 'celcius':
                retVal = farenheightToCelsius(retVal);
                break;
            case 'kelvin':
                retVal = farenheightToKelcius(retVal);
                break;
            case 'rankine':
                retVal = farenheightToRankine(retVal);
                break;
            case 'reaumur':
                retVal = farenheightToReaumur(retVal);
                break;
        }
    }
}
//Ejercicio 8
function calcularPotencia(base, exponente) {
    let retVal = 0;
    base = isNaN(base) ? 0 : base;
    exponente = isNaN(exponente) ? 0 : exponente;
    
    if (base === 0) return retVal;
    retVal = 1;
    for (let i = 1; i <= exponente; i++) {
        retVal = retVal * base;
    }
    return retVal;
}
//Ejercicio 9
function calcularCostoConMateriales(tipo, totalMateriales) {
    totalMateriales = totalMateriales === 0 ? 0 : totalMateriales;
    log(1, totalMateriales);
    let salario = tipoUsuario(tipo);
    log(2, salario);
    let horas = calcularPresupuesto(2, 6);
    log(3, salario);
    if (horas > -1) {
        salario = salario * horas;
        log(4, salario);
        if (totalMateriales !== 0) {
            salario = salario + (salario * 10) / 100;
            log(5, salario);
        } 
    }
}
console.log(calcularPotencia(4, 3));