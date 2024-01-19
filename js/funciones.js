//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       Mi Proyecto
//------------------------------------------------------------------------------------------------------------------------------------------------

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


//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       Objetos
//------------------------------------------------------------------------------------------------------------------------------------------------


//Objeto de productos disponibles para luego agregar al carrito
const productoDisponible = [
    { nombre: "zapas axel", categoria: "zapatillas", precio: 70000 },
    { nombre: "nike", categoria: "zapatillas", precio: 120000 },
    { nombre: "adidas", categoria: "zapatillas", precio: 50000 },
    { nombre: "camiseta", categoria: "remeras", precio: 20000 },
    { nombre: "short", categoria: "pantalones", precio: 180000 }
];


// Objeto del carrito donde se van a agregar los productos
let carritoProductos = []

//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       Lógica
//------------------------------------------------------------------------------------------------------------------------------------------------


//Recorrer objeto
for(let i = 0; i<productoDisponible.length; i++){
    console.log("nombre: " + productoDisponible[i].nombre);
    console.log("precio: " + productoDisponible[i].precio);
}

//Utilizo metodo map para mostrar los productos que están disponibles
const mostrarNombres = productoDisponible.map((arrayNombres) => arrayNombres.nombre)
console.log(mostrarNombres)
alert("Estos son los productos disponibles: " + mostrarNombres)


// Bucle para agregar productos disponibles al carrito
while (confirm ("¿Desea agregar al carrito algún producto disponible?") == true){
    let agregarCarritoProductos = prompt("Favor elegir algún producto disponible: ");
    let posicionProductos = carritoProductos.indexOf(agregarCarritoProductos);
    productoDisponible.splice (posicionProductos,1);
    carritoProductos.push (agregarCarritoProductos)
    console.log(productoDisponible);
    console.log(carritoProductos);
}

alert("Tenes estos productos en el carrito: " + carritoProductos );



// Bucle para eliminar productos del carrito
while(confirm("¿Desea eliminar algún producto?") == true && carritoProductos != ""){
    let sacarProducto = prompt("Elegir el producto que desea sacar");
    let pocisionProducto = carritoProductos.indexOf(sacarProducto);
    carritoProductos.splice(pocisionProducto,1);
    console.log(carritoProductos);
}
if(carritoProductos == ""){
alert("Ya no te quedan productos en el carrito que puedas eliminar😪");
}

//Total del precio de todos los productos
const precioCompra = productoDisponible.reduce((acumular, total) => acumular + total.precio, 0)
console.log(precioCompra)
alert("El precio total es de " + precioCompra + "$")


let monto = parseFloat(prompt("Ingrese el monto que desea pagar en cuotas"));
let resultado = pagoCuotas(monto);








