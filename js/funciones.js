//escuchador de eventos para que al momento de darle clic al carrito, se abra el carrito como tal
const pintarCarrito = () => {
    containerCarrito.innerHTML = ""
    containerCarrito.style.display = "flex";
    const funcionalCarrito = document.createElement("div");
    funcionalCarrito.className = "total-carrito";
    funcionalCarrito.innerHTML = `
        <h1>Carrito</h1>
    `;
    containerCarrito.append(funcionalCarrito);

    const funcionalCarritoBoton = document.createElement("h1");
    funcionalCarritoBoton.innerText = "❌";
    funcionalCarritoBoton.className = "total-carrito-boton";

    funcionalCarritoBoton.addEventListener("click", () => {
        containerCarrito.style.display = "none";
    })

    funcionalCarrito.append(funcionalCarritoBoton)



    carritoProductos.forEach((productos) => {

        let contenidoDelCarrito = document.createElement("div");
        contenidoDelCarrito.className = "contenido-del-carrito";
        contenidoDelCarrito.innerHTML = `
        <img src="${productos.img}">
        <h2>${productos.nombre}</h2>
        <p>Precio: $${productos.precio}</p>
        <p><span class="restar"> - </span> Cantidad: ${productos.cantidad}<span class="sumar"> + </span></p>
        <p>Total: $${productos.cantidad * productos.precio}</p>
        `;

        containerCarrito.append(contenidoDelCarrito);

        let restar = contenidoDelCarrito.querySelector(".restar");

        restar.addEventListener("click", () => {
            if(productos.cantidad != 0){
                productos.cantidad--;
            }
                pintarCarrito();
                    
            if(productos.cantidad == 0){
                eliminarProducto();
            }
            guardarLocal();
        });

        let sumar = contenidoDelCarrito.querySelector(".sumar");

        sumar.addEventListener("click", () => {
                productos.cantidad++;
                guardarLocal();
                pintarCarrito();
        })

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "eliminar-producto";
        contenidoDelCarrito.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    const totalCarrito = carritoProductos.reduce((acumular, total) => acumular + total.precio * total.cantidad, 0);

    const totalPagar = document.createElement("div");
    totalPagar.className = "total-container"
    totalPagar.innerHTML = `Total a pagar: $${totalCarrito}`;
    containerCarrito.append(totalPagar);
}





mostrarCarrito.addEventListener("click", pintarCarrito); 

const eliminarProducto = () =>{
    const encontrarId = carritoProductos.find((element) => element.id);

    carritoProductos = carritoProductos.filter((carritoId) =>{
        return carritoId != encontrarId;
    })
    guardarLocal();
    pintarCarrito();
};