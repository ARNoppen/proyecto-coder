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
//                                                       CARRITO DE COMPRAS FUNCIONAL
//------------------------------------------------------------------------------------------------------------------------------------------------


const containerProductos = document.querySelector("#containerProductos");
const mostrarCarrito = document.querySelector("#mostrarCarrito");
const containerCarrito = document.querySelector("#containerCarrito");

const productoDisponible = [
    { id : 1, nombre: "Zapas axel", categoria: "zapatillas", precio: 70000, cantidad: 1, img: "../img/Zapa Axel.jpg"},
    { id : 2, nombre: "Zapas nike", categoria: "zapatillas", precio: 120000, cantidad: 1, img: "../img/Zapas Nike 2.jpg" },
    { id : 3, nombre: "Zapas adidas", categoria: "zapatillas", precio: 50000, cantidad: 1, img: "../img/Zapa Adidas 3.jpg"},
    { id : 4, nombre: "Remera", categoria: "tren superior", precio: 22000, cantidad: 1, img: "../img/Remera.jpg"},
    { id : 5, nombre: "Buzos", categoria: "tren superior", precio: 20000, cantidad: 1, img: "../img/Buzo.jpg" },
    { id : 6, nombre: "Campera", categoria: "tren superior", precio: 190000, cantidad: 1, img: "../img/Campera.jpg" },
    { id : 7, nombre: "Short", categoria: "tren inferior", precio: 210000, cantidad: 1, img: "../img/Short.jpg" },
    { id : 8, nombre: "Pantalon", categoria: "tren inferior", precio: 210000, cantidad: 1, img: "../img/Pantalon.jpg" }
];


let carritoProductos = [];

//recorrer array de productos disponibles para pushearlo a carrito productos
productoDisponible.forEach(element => {
    let container = document.createElement("div");
    container.className = "card-productos";

    container.innerHTML = `
    <img src="${element.img}">
    <h2>${element.nombre}</h2>
    <p>Precio: $${element.precio}</p>
    `
    containerProductos.append(container);

    let agregarAlCarrito = document.createElement("button");
    agregarAlCarrito.innerText = "Agregar al carrito";
    agregarAlCarrito.classList = "boton"

    container.append(agregarAlCarrito);

    agregarAlCarrito.addEventListener("click", () => {
        const repeat = carritoProductos.some((repeatElement) => repeatElement.id == element.id)
        if(repeat == true){
            carritoProductos.map((prod)=>{
                if(prod.id == element.id){
                    prod.cantidad++;
                }
            })
        }else{
        carritoProductos.push({
            id : element.id,
            nombre : element.nombre,
            categoria : element.categoria,
            precio : element.precio,
            img : element.img,
            cantidad : element.cantidad
        });
        }
        console.log(carritoProductos);
    });
});

