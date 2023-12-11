let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito=JSON.parse(productosEnCarrito);

const botonInico = document.querySelector('#vl-inicio');
const contenedorTotalProductos= document.querySelector('#total-productos')
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");
const total = document.querySelector(".total");
const payBtn =document.querySelector("#pagar-btn");


function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        
        botonInico.classList.add('disabled');
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(products => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML =
                `
             <img class="carrito-producto-imagen" src="${products.image}" alt="${products.title}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${products.title}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                     <p>${products.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${products.price}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${products.price * products.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${products.id}"><i class='bx bx-trash bx-md' ></i></button>
            `;
            contenedorCarritoProductos.append(div);
        })


    } else {
        botonInico.classList.remove('disabled');
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorTotalProductos.classList.add('disabled');
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e){
    const idBoton=parseInt(e.currentTarget.id);
    
    const index = productosEnCarrito.findIndex(products => products.id === idBoton);

    productosEnCarrito.splice(index,1);

    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener('click',vaciarCarrito);
function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal(){
    const totalCalculado =productosEnCarrito.reduce((acc,products)=> acc+(products.price*products.cantidad),0);
    total.innerText = `$${totalCalculado}`;
}

payBtn.addEventListener('click', () => {
    fetch("/stripe-checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            items: JSON.parse(localStorage.getItem('productos-en-carrito'))
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.url) {
            window.location.href = data.url;
        } else {
            console.error("URL inválido", data.url);
        }
    })
    .catch((err) => console.error(err));
});
