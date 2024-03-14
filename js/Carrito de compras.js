//------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       CARRITO DE COMPRAS FUNCIONAL
//------------------------------------------------------------------------------------------------------------------------------------------------


const containerProductos = document.querySelector("#containerProductos");
const mostrarCarrito = document.querySelector("#mostrarCarrito");
const containerCarrito = document.querySelector("#containerCarrito");


let carritoProductos = JSON.parse(localStorage.getItem("carrito")) || [];

const traerProductos = async () => {
    const respuesta = await fetch("datos.json");
    const datos = await respuesta.json();
    
    datos.forEach(element => {
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
        agregarAlCarrito.classList = "boton";
    
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
                cantidad : element.cantidad,
            });
            }
            console.log(carritoProductos);
            guardarLocal();
        });
    });
};

traerProductos();

//recorrer array de productos disponibles para pushearlo a carrito productos



const guardarLocal = () => {
localStorage.setItem("carrito", JSON.stringify (carritoProductos));
};

