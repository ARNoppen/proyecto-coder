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


class carritoProductos{
    constructor (productoDisponible){
        this.productoDisponible = productoDisponible
    }

    getProductoById(id){
        const productoId = this.productoDisponible.find(item => item.id == id);
        if(productoId){
            return productoId;
        }else
        return "No se encontró el producto"
    }
    getProductoByNombre(nombre){
        const nombreProducto = this.productoDisponible.filter(item => item.nombre.toLowerCase().includes(nombre.toLowerCase()) );
        return nombreProducto;
    }

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

const carrito = new carritoProductos(productoDisponible);
const id = prompt("Favor ingresar el ID del producto");
const productoEncontradoId = carrito.getProductoById(id);



const carritoNombre = new carritoProductos(productoDisponible);
const nombreFiltro = prompt ("Favor ingresar el nombre del producto");
const productoEncontradoNombre = carritoNombre.getProductoByNombre(nombreFiltro);


const carritoPriceWhitDiscount = new carritoProductos(productoDisponible);
const descuento = confirm("¿Desea agregar descuento del 10%?");
const mostrarDescuento = carritoPriceWhitDiscount.addDiscount(descuento);



console.log(productoEncontradoId);
console.log(productoEncontradoNombre);
