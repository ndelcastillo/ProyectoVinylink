const carritoCompras = [];
const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('total-carrito');

/*========== AGREGAR PRODUCTO DEL CARRITO ==========*/
//Declaramos una función llamada agregarProductoAlCarrito que acepta un parámetro productoId. Esta función será llamada cuando queramos agregar un producto al carrito. El productoId es el parametro que le paso cuando le doy click al boton 'add to cart' en indexProducts.js . Ese productoId lo uso para hacer un filtro y reconocer cual es el producto que tenemos que agregar
const agregarProductoAlCarrito = (productoId) => {

    // Obtenemos el elemento del DOM que corresponde al contenedor del carrito utilizando su ID. Este contenedor se encuentra en el sidebar de la página.
    const contenedorCarrito = document.getElementById('carrito-contenedor');

    // Definimos una función interna llamada renderProductoCarrito, que se encargará de renderizar el producto en el carrito.
    const renderProductoCarrito = () => {
        // Encontramos el producto en una lista llamada listaProductosOFF que tiene todos los productos disponibles. Utilizamos el productoId pasado como parámetro para encontrar el producto correcto.
        let producto = listaProductosOFF.find((producto) => producto.id == productoId);
        // Verificamos si el producto ya está en el carrito buscando su índice en el array carritoCompras utilizando el método findIndex. Si el producto está en el carrito, el índice será diferente de -1.
        const indexAgregar = carritoCompras.findIndex((producto) => producto.id == productoId);

        if (indexAgregar !== -1) {
            // Si el producto ya está en el carrito, aumentamos su cantidad en 1, siempre y cuando la cantidad no exceda el stock disponible. Actualizamos también el contador de cantidad en el DOM para reflejar el cambio. Si la cantidad excede el stock disponible, mostramos una notificación utilizando la librería Toastify para informar al usuario que se ha excedido el límite de cantidad.
            if (carritoCompras[indexAgregar].cantidad < producto.stock) {
                carritoCompras[indexAgregar].cantidad++;
                const counter = document.querySelector(`#cantidad${producto.id} .counter`);
                counter.textContent = carritoCompras[indexAgregar].cantidad;
            } else {
                Toastify({
                    text: `Quantity limit exceeded.`,
                    duration: 3000,
                    close: true,
                    gravity: "bottom",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        color: "white",
                        background: "rgb(255, 60, 60)",
                    },
                }).showToast();
            }
            return carritoCompras;
        }

        // Si el producto no está en el carrito, lo agregamos al array carritoCompras con una cantidad inicial de 1.
        carritoCompras.push({ ...producto, cantidad: 1 });

        localStorage.setItem('carritoCompras', JSON.stringify(carritoCompras));

        //Creamos un nuevo elemento div en el DOM para representar el producto en el carrito. Configuramos las clases y el contenido HTML del div utilizando la información del producto.
        let div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `
            <div class="carritoAll">
                <div class="carrito">
                <div class="infoCarrito">
                    <img class="imgCarrito" src=${producto.img}>
                    <div class="txtCarrito">
                    <p class="txtName"> ${producto.nombre} - ${producto.artista}</p>
                    <p class="txtPrice">$${producto.oferta}</p>
                    <p class="txtType">Type: ${producto.tipo}</p>
                    <div class="btnCounter" id="cantidad${producto.id}">
                        <button class="btn btn-outline-dark btn-sm me-1" id="cantidadMenos">-</button>
                        <span class="counter">1</span>
                        <button class="btn btn-outline-dark btn-sm ms-1" id="cantidadMas">+</button>
                        <button id="eliminar${producto.id}" class="btnEliminar ms-3"><i class='bx bx-trash'></i></button>
                        <span class="txtSubtotal ms-3"></span>
                    </div>
                    </div>
                </div>
                </div>
                <div class="carritoHr"></div>
            </div>
        `;

        //Agregamos el nuevo elemento div al contenedor del carrito en el DOM.
        contenedorCarrito.appendChild(div);

        /*========== CONTADOR PRODUCTO DEL CARRITO ==========*/
        // Agregamos los eventos a los botones de aumentar y disminuir la cantidad del producto en el carrito
        const btnMenos = div.querySelector('#cantidadMenos');
        const btnMas = div.querySelector('#cantidadMas');
        const counter = div.querySelector('.counter');

        btnMenos.addEventListener('click', () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
                counter.textContent = producto.cantidad;
            }
        });

        btnMas.addEventListener('click', () => {
            if (producto.cantidad < producto.stock) {
                producto.cantidad++;
                counter.textContent = producto.cantidad;
            } else {
                Toastify({
                    text: `Quantity limit exceeded.`,
                    duration: 3000,
                    close: true,
                    gravity: "bottom",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        color: "white",
                        background: "rgb(255, 60, 60)",
                    },
                }).showToast();
            }
        });

        // Aumenta el contador al aumentar el array carritoCompras
        contadorCarrito.innerText = carritoCompras.reduce((total, producto) => total + producto.cantidad, 0);
        // Precio total del carrito
        const totalCarrito = carritoCompras.reduce((acc, producto) => acc + (producto.oferta * producto.cantidad), 0);
        precioTotal.innerText = "$" + totalCarrito.toLocaleString();

        localStorage.setItem('carritoComprasTotal', JSON.stringify(totalCarrito));

        /*========== ELIMINAR PRODUCTO DEL CARRITO ==========*/
        // Estamos seleccionando un elemento de la página HTML que tiene un ID específico. Para hacer esto, estamos utilizando el método querySelector en el elemento div. En este caso, estamos buscando un elemento que tenga un ID que comienza con "eliminar" seguido del id del producto. El resultado de esta línea de código se almacena en la variable btnEliminar.Cuando utilizas 'div.querySelecto'r, estás limitando la búsqueda del elemento a un elemento específico en lugar de buscar en todo el documento HTML utilizando 'document.querySelector'. Esto puede ser útil si solo necesitas buscar un elemento dentro de un contenedor específico en lugar de buscarlo en todo el documento.//
        const btnEliminar = div.querySelector(`#eliminar${producto.id}`);
        // Cuando se activa el evento 'click', se ejecutará una función de flecha '() => eliminarProductoCarrito(producto.id)'. Esta función se pasa como argumento al método addEventListener. Dentro de la función de flecha, estamos llamando a la función 'eliminarProductoCarrito' y pasándole como argumento el id del producto. En este caso, producto.id hace referencia a la propiedad id del objeto producto. La función 'eliminarProductoCarrito' es una función que suponemos existe en otro lugar de tu código y toma el id del producto como argumento para realizar alguna acción específica, como eliminar el producto del carrito. La función de flecha simplemente llama a 'eliminarProductoCarrito' con el id del producto correspondiente como argumento. De esta manera, cuando se hace click en el botón eliminar, se ejecuta la función 'eliminarProductoCarrito' con el id del producto correspondiente, lo que elimina ese producto del carrito.//
        btnEliminar.addEventListener('click', () => eliminarProductoCarrito(producto.id));

        // Esto define una función llamada 'eliminarProductoCarrito' que toma un parámetro llamado 'productoId', que representa el ID del producto que se desea eliminar del carrito. //
        const eliminarProductoCarrito = (productoId) => {

            // Utiliza el método 'findIndex' para encontrar el índice del producto en el arreglo 'carritoCompras'. 'findIndex' recibe una función como argumento que se ejecuta para cada elemento del arreglo, y en este caso compara el id de cada producto con el 'productoId' que se pasa como argumento a la función  'eliminarProductoCarrito'. Si encuentra un producto con el id igual a 'productoId', devuelve su índice en el arreglo 'carritoCompras'. Si no encuentra ningún producto con ese id, devuelve -1. El índice encontrado se almacena en la variable 'index'.//
            const indexEliminar = carritoCompras.findIndex((producto) => producto.id === productoId);

            //  Esta condición verifica si el 'index es igual a -1', lo cual significa que el producto no se encontró en el carrito. En ese caso, la función simplemente retorna sin hacer ninguna acción adicional.
            if (indexEliminar === -1) {
                return;
            }

            // Utiliza el método find para encontrar el producto correspondiente al productoId en el arreglo 'listaProductosOFF'. Al igual que en el paso anterior, se compara el id de cada producto con productoId, y si encuentra un producto con ese id, lo almacena en la variable 'producto'.
            const producto = listaProductosOFF.find((producto) => producto.id === productoId);

            // Actualiza el stock del producto encontrado en el paso anterior sumando la cantidad del producto que estaba en el carrito. Esto se hace para restablecer el stock original del producto. 'index' es el índice del producto dentro del arreglo 'carritoCompras' que se encontró previamente en el código. Representa la posición del producto en el carrito. 'carritoCompras[index].cantidad' se refiere a la propiedad cantidad del objeto producto dentro del carrito de compras. Esto indica la cantidad de ese producto que se agregó al carrito. En resumen, la línea de código 'producto.stock -= carritoCompras[index].cantidad' está restando el valor de 'cantidad' del objeto 'producto' dentro del carrito de compras al stock original del producto. Esto se hace para reflejar la disminución del stock después de agregar ese producto al carrito.
            producto.stock -= carritoCompras[indexEliminar].cantidad;

            // Elimina el producto del carrito de compras utilizando el método splice. splice recibe dos argumentos: el índice del elemento a eliminar (index) y el número de elementos a eliminar (en este caso, solo se elimina 1 producto).
            carritoCompras.splice(indexEliminar, 1);

            // Esta línea busca un elemento dentro del carrito de compras que cumpla con ciertas condiciones. El elemento debe estar dentro del contenedor con el ID "carrito-contenedor". Además, debe tener la clase "productoEnCarrito" y ser el (index + 1)-ésimo hijo dentro de su contenedor padre. El resultado de esta búsqueda se guarda en la variable productoEnCarrito.
            const productoEnCarrito = document.querySelector(`#carrito-contenedor .productoEnCarrito:nth-child(${indexEliminar + 1})`);
            // Esta línea verifica si se encontró un elemento en el paso anterior. Si productoEnCarrito tiene un valor (es decir, se encontró un elemento que coincide con el selector), se ejecuta el bloque de código dentro del if. 'productoEnCarrito.remove()' si se encontró un elemento, esta línea elimina el elemento del carrito de compras en la página web.
            if (productoEnCarrito) {
                productoEnCarrito.remove();
            }

            // Aumentar el contador al disminuir el array carritoCompras
            contadorCarrito.innerText = carritoCompras.reduce((total, producto) => total + producto.cantidad, 0);

            // Recalcular el precio total del carrito
            const totalCarrito = carritoCompras.reduce((acc, producto) => acc + (producto.oferta * producto.cantidad), 0);
            precioTotal.innerText = "$" + totalCarrito.toLocaleString();
        };
    };
    renderProductoCarrito();
};


