function celsiusToFahrenheit(from) {
    let retVal = isNaN(from) ? 0 : from;
    return ((1.8 * retVal) + 32);
}
function farenheightToCelsius(from) {
    return ((from - 32) / 1.8);
}
function farenheightToKelvin(from) {
    return ((from + 459.67) / 1.8);
}
function farenheightToRankine(from) {
    return (from + 459.67);
}
function farenheightToReaumur(from) {
    return ((from - 32) / 2.25);
}
function calcularPresupuesto(dias, horas) {
    dias = isNaN(dias) ? 0 : dias;
    horas = isNaN(horas) ? 0 : horas;
    if (horas === 0) return -1;
    if (dias !== 0) return (dias * horas);
    else return horas;
}
function tipoUsuario(tipo) {
    const valorHora = 200;
    const valorAssH = 150;
    if (tipo === 'A') return valorAssH;
    else return valorHora;
}
function log(i, p) {
    console.log(`${i} - ${p}`);
}