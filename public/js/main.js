
const products = [
    {
        id: 1,
        title: "Pelotitas para Gatos",
        price: 6,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXtBJRsMPrYi1YHWlKKdze6BQNE8NxYUdR5aBO7e8nD-ha-_S2bmNH9zYoZWgMqn9sUvvCdjlEEd-nNZylRHc3eRHpyWHJfN-eUGLGGYQf5LIvxSxbuMtlb6fOcTGjR1hckGMEe9HXojklX0XjbdXoB_egK3U9db-WXheEbmeubJU-LHrOoS6NHBlggtiB/s320/Img1e.png",
        categoria: {
            nombre: "juguete",
            id_cat: "juguetes"
        }
    },
    {
        id: 2,
        title: "Tiron Perros",
        price: 10,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh88Q8yBJGtth1nCue8EivS6y9DFLxVUPu3CPsP6tite6EEsS1BMxupDv2pY_Q4JOudAPWLGcAt5yqlsbJR2L7NJquIEreHd_aMyVo1543UgVyFTZHp1lVBDmysLQmAnQiTQ3V4iYqCbDhFjlZtlAZz0ggrJE2J-4U2taP4M0bphbRAKAUIH2rjpFKnGS9s/s320/img2e%20(1).png",
        categoria: {
            nombre: "juguete-01",
            id_cat: "juguetes"
        }
    },
    {
        id: 3,
        title: "Zanahoria Gatos",
        price: 5,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFiD4NHOE_hy-cibLfvBrr4mnTvuZpdTkM0PUGZ8xcq-3U-ajaftpIbAy-7UfVCAZ7-s6ujSOLcgFM6WgunH8E5RJuCaXSaZJHkTtH75IOWFCSW-IBlkcUDS1IL9sq_Bl0wsAR3f0y5t3ZppVrTxiiJGuPRTY4nns4PYdvuklomgLWF8JMquP7vZCVJD_F/s320/img3e.png",
        categoria: {
            nombre: "juguete-02",
            id_cat: "juguetes"
        }
    },
    {
        id: 4,
        title: "Pelotita Plastico",
        price: 4,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfmkYQXDWnHGdwrXi_9ctHiqi2cYIjRrTmSPDvW3eaarf_ecDL3fyVlT49qvfQfqm3z3kMSQiI8UbsdjfhfvosO0-FpR_o7IvOHuc5SQTU93u56bNxvIPCH0V22C9Tv4Y0TkKjv5G85QxwONjPzRAJDDNqSwVvyc2tZjmMfckeyIs4WoLEnMfInUj2yDA5/s320/img4e.png",
        categoria: {
            nombre: "juguete-02",
            id_cat: "juguetes"
        }
    },
    {
        id: 5,
        title: "Rueda para Gatos",
        price: 4,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfoxbKJJeAkIx3V7Oh-VIOm3zTeNKBu9Ky9-fdxH8lcWQw7I1r3r_hgHRVlumAB6JGoxy-Erc_1oAtGHNVPuTOB4zVOJC1PYj5PNtJuLlAjfQOuHUr8cbyR_Dnur-CH9a6H9TKJ75Rm4o4Jvo5HGfFpYBf5FqXpOEm2ZIfJtLqZs9c0WqXheuXGgqYDZII/s320/img5e.png",
        categoria: {
            nombre: "juguete-03",
            id_cat: "juguetes"
        }
    },
    {
        id: 6,
        title: "Alimento Cachorros",
        price: 15,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8W6R40eBcLWW15mOXPg_FaDY7cpycJeUf4buWhyphenhyphen4p56ZV9j4XW-otR_uPxk73dSm3ZaM3Mr7ti_vXmhFcuADZ9Cim-_ZzQjAJCCL2q4CuZ2vSByAvnAPrZpWMo5Nk3-v9UF86LsN-9cBOOVBrpxBn4Ozo9ye1LuTSZIv6i28ijf02p4enDG9wnCjyOSce/s320/alimento1e.png",
        categoria: {
            nombre: "alimento",
            id_cat: "alimentos"
        }
    },
    {
        id: 7,
        title: "Snacks para Perros",
        price: 8,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6zv5O2z4v4Mo5SNQtR9h1jlWd9GomMiO9siWTn8vs0rskkxkip7RqC8kw4bIWfQThYSOwHL1sXokG5z60M0Aarta-8JLgy1AE5EIXdiG6qwKzcS_jBk5hq57NynpZgDbXGr3gKewbmQniF0_8dOud11nsxISdurYE_OqpcsjA1CW-8PsjCJkIFZ7oJSxz/s320/alimento5e.png",
        categoria: {
            nombre: "alimento-01",
            id_cat: "alimentos"
        }
    },
    {
        id: 8,
        title: "Royal Canin Perros",
        price: 25,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqPZ4H_h3tQI4fWU4B2W_gX9UWt7XqdkmG3HcIH5es2kq-0E80zD489ejmmN1wzYWg7ULgRw5-DVOfOxwUTPNMtJJJAytRZCgOmDOSg62lWhJ83EGXGapT3WLSM-JAXIJgy5I6v9gFh9ecCckZcL0sRQrgREY7YlDf_c-diCzod-bLynxqoT3Wokt4fr7B/s320/Alimento4e.png",
        categoria: {
            nombre: "aliemento-02",
            id_cat: "alimentos"
        }
    },
    {
        id: 9,
        title: "Ropa Perros",
        price: 35,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhETgzw9wpS0dQU68gyhoMbRV-3Z7oTM5sS3vcHvWBqdvCmYoVah9pnEeZTYfvjq0rFOd_Gxr-BKZLtHX0CMVBdZIN_4y0cALfAX50JLHTxCJO0n4MGzsSpSX0Xaz1nynP6Cb9Vn0EJbNDAqVaLv8AK9sZnto-HfToaHuJhHLdwBOt1XCB44uqDIRpAS5mk/s320/ropa5.png",
        categoria: {
            nombre: "ropa",
            id_cat: "ropa"
        }
    },
    {
        id: 10,
        title: "Ropa Perros",
        price: 45,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo0eV4IFU_lS_MAKtcBVd2NPc-yz54qW1nj3z3bzoyTGZEmKSkFSpr_0nLw1eIyPYabY-mjfeH-BPVKTMgUKS9ev-NfotNPr7_EIAzTll4X_VNy1O6GWJdbJgYLSNmIawYadPoImbEO-HstkQyg-l3J7xkCEKVAxAfLElRWLfLJhjuN0xWgDfPeatl_3DD/s320/ropa3.png",
        categoria: {
            nombre: "ropa-01",
            id_cat: "ropa"
        }
    },
    {
        id: 11,
        title: "Ropa Perros",
        price: 25,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoqaWR1UBHnHLNpFILivnQD-WKi78McX22ZA9YRVJvDEC_8RX7483VzlV_4uUgIF0MXJ0HOyZKiqlUSy5GGdfc9BH8d-EOAAWWND1X4loPgzgkGQPPqpsNN4mJV5sX-9eEut7YXkCsaaAZBNYuUJCac9cuxe_qORJkNnkKIzu1rw7Fz1h5Rw6Y6Axh1SAp/s320/ropa2.png",
        categoria: {
            nombre: "ropa-02",
            id_cat: "ropa"
        }
    },
    {
        id: 12,
        title: "Ropa Perros",
        price: 65,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOVO4J0-T_QNyHEcFua5DR7qg2ZJfKU3YuB8jaiH7XMXlz3VE6YMOZSE-bK68TQcJXyD-NcNnIHowaVbzniN2BA4qjz9LGRhgKMdJ80J_aYCYxt1oBt70G5BA_qfI_Xf8BCy67bpusOmVRE1UdDmvXeZv98e2aptu5FpWu0zV9aBe_bmNC4uO_WR4XANcS/s320/ropa1.png",
        categoria: {
            nombre: "ropa-03",
            id_cat: "ropa"
        }
    },
    {
        id: 13,
        title: "Ropa Gato",
        price: 25,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2Cc7YggAlEFlQeQkyDbPceztIpMNGN_3IFxIQQm9rVCVXOBxhPRdQDY8UjfUilcna8kTjfgdtqsm_hO8NSFwL2LpUNVjeSX61Wj71_Sb-N5D5I5gxa7JOUuuO36v9_ixTebEWgIRceuZMHcoEKpNqjiPQMurAwCjqRI-SLjItllp8CsRr_wDjqVN0uZ4r/s320/ropa4.png",
        categoria: {
            nombre: "ropa-04",
            id_cat: "ropa"
        }
    },
    {
        id: 14,
        title: "Ropa Gat0",
        price: 15,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpaN1gKFu28Puzh9sTDJIpEu7qkO_YzspEB_Whyphenhyphen0gWlocl7N_TUql8UCH10DEIuZMRU5BKnipisGtfeu0XorNn_Fd2N1mjO5HxhzVas0ovL3ElZKJE8uTkLGqieZjXJfkn3mM4kv0jOjARpUsXD7bHg5paEx_ywecb_6H-RZNkOc_QovuvgjpbQ7BORbqz/s320/ropa6.png",
        categoria: {
            nombre: "ropa-05",
            id_cat: "ropa"
        }
    }
];


const contenedorProductos = document.querySelector("#productList");
let botonesAgregar = document.querySelectorAll(".add-to-cart");
const numerito = document.querySelector("#cart-icon");
const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton-busqueda");
const resultado = document.querySelector('#resultado');
const botonesCategoria = document.querySelectorAll(".boton-cate");


function cargarProductos(productosElegidos) {
    console.log("Productos Elegidos:", productosElegidos);
    // Obtener el valor ingresado en la barra de búsqueda
    const filtro = document.getElementById("formulario").value.toLowerCase();

    // Limpiar contenedor de productos antes de volver a cargar
    contenedorProductos.innerHTML = "";

    // Verificar si la barra de búsqueda está vacía
    if (filtro === "") {
        // Si está vacía, cargar todos los productos
        productosElegidos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML =
                `
                <img src="${producto.image}" alt="${producto.title}" class="product-img">
                    <div class="product-info">
                         <h2 class="product-title">${producto.title}</h2>
                         <p class="product-price">$${producto.price}</p>
                         <a class="add-to-cart" id="${producto.id}">Agregar al carrito</a>
                    </div>
            `;
            contenedorProductos.append(div);
        });
    } else {
        // Si hay un filtro, filtrar productos según el criterio de búsqueda
        const productosFiltrados = products.filter(producto => producto.title.toLowerCase().includes(filtro));

        // Cargar productos filtrados
        productosFiltrados.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML =
                `
                <img src="${producto.image}" alt="${producto.title}" class="product-img">
                    <div class="product-info">
                         <h2 class="product-title">${producto.title}</h2>
                         <p class="product-price">$${producto.price}</p>
                         <a class="add-to-cart" id="${producto.id}">Agregar al carrito</a>
                    </div>
            `;
            contenedorProductos.append(div);
        });
    }
    // Actualizar botones después de cargar productos
    actualizarBotonesAgregar();
}

// Asignar la función cargarProductos al evento click del botón de búsqueda
document.getElementById("formulario").addEventListener("input", cargarProductos);
document.addEventListener("DOMContentLoaded", cargarProductos(products));

console.log(botonesAgregar);

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".add-to-cart");

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = parseInt(e.currentTarget.id);
    const productoAgregado = products.find(products => products.id === idBoton);

    if (productosEnCarrito.some(products => products.id === idBoton)) {
        const index = productosEnCarrito.findIndex(products => products.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumero() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, products) => acc + products.cantidad, 0);
    numerito.setAttribute('data-quantity', nuevoNumerito);
}

botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const categoriaId = e.target.parentElement.id;
        console.log("Categoría Seleccionada:", categoriaId);

        // Filtrar productos por categoría
        const productosBoton = products.filter(producto => producto.categoria.id_cat === categoriaId);
        console.log("Productos Filtrados:", productosBoton);

        // Cargar productos filtrados
        cargarProductos(productosBoton);
    });
});
