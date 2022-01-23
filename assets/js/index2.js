//Evento click en html que dispara funcion "recogerColor" -> entra id del elemento, recoge el color, y cambia el backgroundcolor del elemento "cajaGrande"
function recogeColor(n){
    let colorN = document.getElementById(n);
    let colorNStyle = window.getComputedStyle(colorN);
    let elementoColor = colorNStyle.getPropertyValue("background-color");
    document.getElementById("cajaGrande").style.backgroundColor = elementoColor;
}
