const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", datosForm);
const limpiar = document.querySelector(".limpiar");
formulario.addEventListener("click", limpiarForm);

//Limpia inputs y errores
function limpiarForm(){
    formInput = document.querySelector(".form__input").innerHTML = "";
    limpiarErrores();
}


//Remueve errores y valida los inputs
function datosForm(){
    //Remueve el comportamiento por defecto
    event.preventDefault();
    //Limpia solo errores
    limpiarErrores();
    //let apuntan a valores de los elementos inputs
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    //valida valores, retorna booleano
    let result = validarForm (nombre,asunto,mensaje);
    if (result == true){
        document.querySelector(".resultado").innerHTML = "Datos enviados correctamente!";
    }
}


//Intenté poner selector "querySelectorAll(".form__section").innerHTML = '', (es la clase de todos los errores y resultado, pero no entiendo pq no funciona)
function limpiarErrores(){
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
    document.querySelector(".resultado").innerHTML = "";
};

//valida los inputs
function validarForm(nombre,asunto,mensaje){
    let validacion = true;
    let patron = /[a-zA-Z]/;

    if (patron.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML = "Ingrese solo caracteres alfabéticos"
        validacion = false;
    }
    
    
    
    if (patron.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML = "Ingrese solo caracteres alfabéticos"
        validacion = false;
    }
    
    

    if (patron.test(mensaje) == false){
        document.querySelector(".errorMensaje").innerHTML = "Ingrese solo caracteres alfabéticos"
        validacion = false;
    }   
    return validacion;
};

