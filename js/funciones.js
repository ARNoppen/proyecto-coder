// prompt para pedir datos

let usuario = prompt("Ingresa tu nombre");
let contrasenia = prompt("Ingrese la contraseña");
let mensaje = ("Hola " + usuario + " si estas leyendo esto es porque te dije mi contraseña o sos tan crack que la adivinaste😎🤑");
let mensaje4 = ("Malas noticias " + usuario + " no sabes la contraseña jijija");

if (contrasenia == "soychom") {
    alert(mensaje);
}
else if (contrasenia != "soychom") {
    alert(mensaje4);
}


// console.log para mostrar datos por consola
console.log(usuario);




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




