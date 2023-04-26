const carritoCompras = []

const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById('carrito-contenedor')

    const renderProductoCarrito = () => {
        let producto = productosPrecioDescuento.find(producto => producto.id == productoId);
        carritoCompras.push(producto)

        producto.cantidad = 1;
        // producto.cantidad++;

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
                        <div class="carritoAll"> 
                            <div class="carrito">
                                <div class="infoCarrito">
                                    <img class="imgCarrito" src=${producto.img}>
                                    <div class="txtCarrito">
                                        <p class="txtName"> ${producto.nombre} - ${producto.artista}</p>
                                        <p class="txtArtist"> </p>
                                        <p class="txtPrice"> $${producto.oferta} </p>
                                        <p class="txtType">Type: ${producto.tipo}</p> 
                                        <div class="btnCounter" id="cantidad${producto.id}">
                                            <button class="btn btn-outline-dark btn-sm me-1">-</button>
                                            <span class="counter">0</span>
                                            <button class="btn btn-outline-dark btn-sm ms-1">+</button>
                                            <button id="eliminar${producto.id}" class="btnEliminar ms-3"><i
                                            class='bx bx-trash'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carritoHr"></div>
                         </div>
                        `

        // function eliminarProductoCarrito(idProducto) {
        //     let productoBorrar = document.getElementById(`eliminar${producto.id}`)
        //     let indiceProductoBorrar = listaProductos.findIndex(
        //         (producto) => Number(producto.id) === Number(idProducto)
        //     );
        //     listaProductos.splice(indiceProductoBorrar, 1);
        //     productoBorrar.remove()
        // }

        contenedorCarrito.appendChild(div);
    }
    renderProductoCarrito()
}

