

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



let usuario = prompt("Ingrese su usuario");
    usuario = usuario.toLowerCase();
let contrasenia = login();


// Funcion para calcular un pago en 3 cuotas 

function pagoCuotas(monto){
    let resultados = monto / 3;
    alert ("Debes pagar 3 cuotas de " + resultados + " pesos por mes");
}



let monto = parseFloat(prompt("Ingrese el monto que desea pagar en cuotas"));
let resultado = pagoCuotas(monto);








/*
// Primera clase

const dni = 94769487;

let nombre = "Axel";
let apellido = "Núñez"
let email = "aranuo23@gmail.com";
let telefono = 1150383628


// Operaciones

let numero1 = 3;
let numero2 = 5;
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let divicion = numero1 / numero2;


// Concatenaciones de texto

let nombreApellido = nombre + " " + apellido
*/









// Condicionales Equipos
/*
let local = prompt("Ingrese el equipo local");
let golesLocal = prompt("Goles del equipo Local");

let visitante = prompt("Ingrese el equipo visitante");
let golesVisitante = prompt("Goles del equipo visitante");

let mensaje2;
let mensaje3;

if ( golesLocal > golesVisitante ) {
    mensaje2 = ("GANOOOO ✔😎🥵 " + local);
    mensaje3 = ("Perdió " + visitante + " ajajajajaj❌🥱");
}

if (golesLocal == golesVisitante) {
    mensaje2 = ("Empataron 😪😐");
}

alert(mensaje2);
alert (mensaje3);
console.log(local);
*/




