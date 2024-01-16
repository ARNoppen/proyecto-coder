

// Funcion para loguearse, solo tenes 3 intentos para escribir la contraseña correcta.
function login( contrasenia){
    let errores = 3;
    while ( errores >= 1) {
        let mensaje = ("Bienvenido " + usuario + " 😎✔✨");
        let mensajeError = ("Malas noticias " + usuario + " solo te quedan " + (errores - 1) + " oportunidades");

        let contrasenia = prompt("Ingrese la contraseña");
        contrasenia = contrasenia.toLowerCase();

        if (contrasenia != "contraseña123") {
            alert(mensajeError);
            errores = errores - 1;
            if(contrasenia != "contraseña123" && errores == 0){
                alert("ya no te quedan intentos 😔❌😪 favor recargar la página");
            }
        }
        else if (contrasenia == "contraseña123") {
            alert(mensaje);
            errores = 0;
    }
    }
}

// Funcion para calcular un pago en 3 cuotas 
function pagoCuotas(monto){
    let resultados = monto / 3;
    alert ("Debes pagar 3 cuotas de " + resultados + " pesos por mes");
}



let usuario = prompt("Ingrese su usuario");
    usuario = usuario.toLowerCase();
let contrasenia = login();



let monto = parseFloat(prompt("Ingrese el monto que desea pagar en cuotas"));
let resultado = pagoCuotas(monto);








