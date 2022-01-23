// declaración de punteros const
const val1 = document.getElementById("valor1");
const val2 = document.getElementById("valor2");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multi = document.getElementById("multi");
const divi = document.getElementById("divi");
const modu = document.getElementById("modu");
const result = document.querySelector(".resultado");

function suma() {
    if (val1.value === "" || val2.value === ""){
        result.innerHTML = "Debe ingresar ambos números"
    }
    else {
        producto = parseFloat(val1.value) +  parseFloat(val2.value)
        result.innerHTML = producto;
    }   
}

function resta() {
    if (val1.value === "" || val2.value === ""){
        result.innerHTML = "Debe ingresar ambos números"
    }
    else{
            producto = parseFloat(val1.value) - parseFloat(val2.value)
        if (producto<0){
            result.innerHTML = 0;
        }
        else {
            result.innerHTML = producto;
        }
    }
}

function multiplicar() {
    if (val1.value === "" || val2.value === ""){
        result.innerHTML = "Debe ingresar ambos números"
    }
    else {
        producto = parseFloat(val1.value) * parseFloat(val2.value);
        result.innerHTML = producto;
    }
}

function dividir() {
    if (val1.value === "" || val2.value === ""){
        result.innerHTML = "Debe ingresar ambos números"
    }
    else {
        producto = parseFloat(val1.value) / parseFloat(val2.value)
        result.innerHTML = producto;
    }
}

function modulo() {
    if (val1.value === "" || val2.value === ""){
        result.innerHTML = "Debe ingresar ambos números"
    }
    else {
        producto = parseFloat(val1.value) % parseFloat(val2.value)
        result.innerHTML = producto;
    }
    
}

//llamado a funciones con evento click
sumar.addEventListener("click", suma);
restar.addEventListener("click", resta);
multi.addEventListener("click", multiplicar);
divi.addEventListener("click", dividir);
modu.addEventListener("click", modulo);