//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       Mi Proyecto
//------------------------------------------------------------------------------------------------------------------------------------------------


//Mostrar día de hoy por consola
const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado",]

//Acá le digo que nro de día es
/*
const dia = fecha.getDay()

console.log ("Hoy es " + dias[dia])
*/


// Funcion para loguearse, solo tenes 3 intentos para escribir la contraseña correcta.
function login( contrasenia){
    let errores = 3;
    while ( errores >= 1) {
        let contrasenia = prompt("Ingrese la contraseña");

        if (contrasenia != "contraseña123") {
            alert("Malas noticias " + usuario + " solo te quedan " + (errores - 1) + " oportunidades");
            errores = errores - 1;
            if(contrasenia != "contraseña123" && errores == 0){
                alert("ya no te quedan intentos 😔❌😪 favor recargar la página");
            }
        }
        else if (contrasenia == "contraseña123") {
            alert("Bienvenido " + usuario + " 😎✔✨");
            errores = 0;
    }
    }
}


// Funcion para calcular un pago en 3 cuotas 
function pagoCuotas(monto){
    let resultados = monto / 3;
    alert ("Debes pagar 3 cuotas de " + resultados + " pesos por mes");
}





//Titulo de bienvenida al usuario que ingresa
const tituloBienvenida = document.querySelector("#tituloBienvenida");
console.log(tituloBienvenida);   
let usuario = prompt("Ingrese su usuario");

let mensaje = "Bienvenid@ " + usuario;

let contrasenia = login();

tituloBienvenida.innerText = mensaje;



/*



//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       Objetos
//------------------------------------------------------------------------------------------------------------------------------------------------




//Objeto de productos disponibles para luego agregar al carrito
const productoDisponible = [
    { id : 1, nombre: "zapas axel", categoria: "zapatillas", precio: 70000 },
    { id : 2, nombre: "zapas nike", categoria: "zapatillas", precio: 120000 },
    { id : 3, nombre: "zapas adidas", categoria: "zapatillas", precio: 50000 },
    { id : 4, nombre: "camiseta nike", categoria: "remeras", precio: 22000 },
    { id : 5, nombre: "camiseta adidas", categoria: "remeras", precio: 20000 },
    { id : 6, nombre: "short adidas", categoria: "pantalones", precio: 190000 },
    { id : 7, nombre: "short nike", categoria: "pantalones", precio: 210000 },
    { id : 8, nombre: "short nike", categoria: "pantalones", precio: 210000 }
];



const carritoProductos = [];

//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       Practicando Clase constructora y métodos
//------------------------------------------------------------------------------------------------------------------------------------------------
/*
class carritoProductos{
    constructor (productoDisponible){
        this.productoDisponible = productoDisponible
    }
//Metodo para buscar productos por ID
    getProductoById(id){
        const productoId = this.productoDisponible.find(item => item.id == id);
        if(productoId){
            return productoId;
        }else
        return "No se encontró el producto"
    }
// Metodo para buscar producto por Nombre
    getProductoByNombre(nombre){
        const nombreProducto = this.productoDisponible.filter(item => item.nombre.toLowerCase().includes(nombre.toLowerCase()) );
        return nombreProducto;
    }
//Metodo para agregar descuento
    addDiscount(precio){
        if(descuento == true){
        const agregarDescuento = this.productoDisponible.map( productoDisponible => {
            const discount = (productoDisponible.precio * 10)  / 100;
            return { id : productoDisponible.id, nombre : productoDisponible.nombre, discount : discount}
        })
        console.log(agregarDescuento);
        }else{
            return console.log("No se aplicó descuento");
        }
    }
}

const carritoBusqueda = new carritoProductos(productoDisponible);
const id = prompt("Favor ingresar el ID del producto");
const productoEncontradoId = carritoBusqueda.getProductoById(id);



const carritoNombre = new carritoProductos(productoDisponible);
const nombreFiltro = prompt ("Favor ingresar el nombre del producto");
const productoEncontradoNombre = carritoNombre.getProductoByNombre(nombreFiltro);


const carritoPriceWhitDiscount = new carritoProductos(productoDisponible);
const descuento = confirm("¿Desea agregar descuento del 10%?");
const mostrarDescuento = carritoPriceWhitDiscount.addDiscount(descuento);



console.log(productoEncontradoId);
console.log(productoEncontradoNombre);
*/



//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       Lógica
//------------------------------------------------------------------------------------------------------------------------------------------------


//Recorrer objeto
console.log("Productos:");
productoDisponible.forEach(element => {
    console.log("Nombre: " + element.nombre);
    console.log("Precio: " + element.precio);
});



//Utilizo metodo map para mostrar los productos que están disponibles
const mostrarNombres = productoDisponible.map((arrayNombres) => arrayNombres.nombre)
console.log(mostrarNombres)
alert("Estos son los productos disponibles: " + mostrarNombres)








// Bucle para agregar productos disponibles al carrito
while (confirm ("¿Desea agregar al carrito algún producto disponible?") == true){
    let agregarCarritoProductos = prompt("Favor elegir algún producto disponible: ");
    // indexof para saber la pocisión del producto
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






//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       DOM para carrito
//------------------------------------------------------------------------------------------------------------------------------------------------
const cardOfertas = document.querySelector(".card-ofertas")





//Total del precio de todos los productos
const precioCompra = productoDisponible.reduce((acumular, total) => acumular + total.precio, 0)
console.log(precioCompra)
alert("El precio total es de " + precioCompra + "$")


let monto = parseFloat(prompt("Ingrese el monto que desea pagar en cuotas"));
let resultado = pagoCuotas(monto);



















//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       Código viejo (bucle para agregar y sacar productos al carrito)
//------------------------------------------------------------------------------------------------------------------------------------------------






*/