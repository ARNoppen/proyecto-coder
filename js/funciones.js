

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




//Array para agregar productos al carrito
const carrito = [];
let producto;

while (confirm ("¿Desea agregar productos?") == true){
    producto = prompt("Escribir un producto: ");
    carrito.push (producto);
    console.log(producto);
}

alert("Tenes estos productos en el carrito: " + carrito );


// Sacar productos del carrito
while(confirm("¿Desea sacar algún producto?") == true){
    let pocisionProducto = prompt("Elegir la posición del producto que desea sacar (Si no sabe la posición de su producto escribir 'nose la posicion')");
    if(pocisionProducto == "nose la posicion"){
        
        let saberPosicion = carrito.indexOf(prompt("Escribir el producto para saber su posición: "));
        alert("La posicion de su producto es: " + saberPosicion);
    }else{
    carrito.splice(pocisionProducto,1);
    console.log(carrito);
    }
}

alert("Tenes estos productos en el carrito: " + carrito );

let monto = parseFloat(prompt("Ingrese el monto que desea pagar en cuotas"));
let resultado = pagoCuotas(monto);








