function charReplaceAllsDefault(v1) {
    return charReplaceAlls(v1, "");
}
function charReplaceAlls(v1, v3) {
    const chars = [".", ",", "-", "_", " ", ";", ":", "?", "¿", "!", "¡", "@", "{", "}", "[", "]"];
    return charReplaceAll(v1, chars, v3);
}
function charReplaceAll(v1, chars, v3) {
    let retVal = v1;
    chars.forEach((e) => {
        retVal = charReplace(retVal, e, v3);
    })
    return retVal;
}
function charReplace(v1, v2, v3) {
    let retVal = "";
    for(let i = 0; i < v1.length; i++) {
            retVal += (v1.charAt(i) === v2) ? v3 : v1.charAt(i);
    }
    return retVal;
}
function replaceAccents(v1) {
    let tildes = "áéíóúÁÉÍÓÚ";
    let sinTildes = "aeiouAEIOU";
    for (let i = 0; i < tildes.length; i++) {
        v1 = charReplace(v1, tildes.charAt(i), sinTildes.charAt(i));
    }
    return v1;
}
function splitString(ci, ini, end) {
    return ci.substring(ini, end);
}
function getElementDQS(el) {
    return document.querySelector(el);
}