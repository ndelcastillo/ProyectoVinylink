const listaProductos = [
    {
        id: 1,
        nombre: "The Drak Side Of The Moon",
        artista: "Pink Floyd",
        anio: "2016",
        genero: "Rock",
        tipo: "LP",
        precio: 5000,
        oferta: '',
        cantidad: 1,
        img: "assets/images/productos/the-dark-side-of-the-moon-pink-floyd.jpeg"
    },
    {
        id: 2,
        nombre: "Memento Mori",
        artista: "Depeche Mode",
        anio: "2023",
        genero: "Synth-pop",
        tipo: "LPx2",
        precio: 7000,
        oferta: '',
        cantidad: 1,
        img: "assets/images/productos/memento-mori-depeche-mode.jpeg"
    },
    {
        id: 3,
        nombre: "Blonde",
        artista: "Frank Ocean",
        anio: "2022",
        genero: "R&B",
        tipo: "LPx2",
        precio: 8000,
        oferta: '',
        cantidad: 1,
        img: "assets/images/productos/blonde-frank-ocean.jpeg"
    },
    {
        id: 4,
        nombre: "Cracker Island",
        artista: "Gorillaz",
        anio: "2023",
        genero: "Electronic",
        tipo: "LP",
        precio: 5000,
        oferta: '',
        cantidad: 1,
        img: "assets/images/productos/cracker-island-gorillaz.jpeg"
    },
    {
        id: 5,
        nombre: "Lover (Live From Paris)",
        artista: "Taylor Swift",
        anio: "2011",
        genero: "Dance-pop",
        tipo: "LPx2",
        precio: 9000,
        oferta: '',
        cantidad: 1,
        img: "assets/images/productos/lover-live-from-paris-taylor-swift.jpeg"
    },
    {
        id: 6,
        nombre: "Mezzanine",
        artista: "Massive Attack",
        anio: "2013",
        genero: "Trip-Hop",
        tipo: "LPx2",
        precio: 7000,
        oferta: '',
        cantidad: 1,
        img: "assets/images/productos/mezzanie-masive-attack.jpeg"
    },
    {
        id: 7,
        nombre: "Anti",
        artista: "Rihanna",
        anio: "2016",
        genero: "R&B",
        tipo: "LPx2",
        precio: 9000,
        oferta: '',
        cantidad: 1,
        img: "assets/images/productos/anti-rihanna.jpeg"
    },
    {
        id: 8,
        nombre: "Siamese Dream",
        artista: "The Smashing Pumpkins",
        anio: "2011",
        genero: "Rock",
        tipo: "LPx2",
        precio: 8000,
        oferta: '',
        cantidad: 1,
        img: "assets/images/productos/siamese-dream-smashing-pumpkins.jpeg"
    },
]

//Le agrego a ciertos productos un 15% OFF
const productosPrecioDescuento = listaProductos.map((producto) => ({
    ...producto,
    oferta: producto.precio * 0.85,
}))
console.log(productosPrecioDescuento)

const contenedorProductos = document.getElementById("contenedor-productos")
for (const productos of productosPrecioDescuento) {
    let column = document.createElement("div")
    column.className = "col-lg-3 col-12 mt-5 pt-3 d-flex justify-content-center align-items-center";
    column.id = `columna-${productos.id}`;
    column.innerHTML = `
        <div class = "card position-relative" style="width:17rem">
            <div class="card-top">
                <img src=${productos.img} class="card-img-top" alt="coverAlbum">
                <button type="button" id="boton${productos.id}" class="btn btnAgregarCarrito shadow-sm btn-outline-secondary position-absolute top-100 end-0 start-0">Add to cart</button>
           </div>
            <div class="card-body">
                    <div class="cardTitle">
                    <h5 class="cardName"> ${productos.nombre} </h5>
                </div>
                <h6 class="cardArtist"> ${productos.artista} </h6>
                <div class="cardTxt mt-4">
                    <p class="cardYear"> ${productos.anio} </p>
                    <p class="cardGenre"> ${productos.genero} </p>
                    <p class="cardKind"> ${productos.tipo} </p>
                </div>
                <div class="cardTxtPrice">
                    <p class="cardPrice"> $ ${productos.precio} </p>
                    <p class="cardPriceOferta">(15% OFF) <span class="cardOferta ms-1"> $${productos.oferta} </span> </p>
                </div>
            </div>
        </div>`;
    contenedorProductos.appendChild(column)

    const boton = document.getElementById(`boton${productos.id}`)
    boton.addEventListener('click', () => {
        carritoIndex(productos.id)
        Toastify({
            text: `"${productos.nombre}" added to cart`,
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                color: "white",
                background: "rgb(60, 129, 60)",
            },
        }).showToast();
    })
    // // ========== BORRAR UNA CARD
    // let columnaBorrar = document.getElementById("columna-1")
    // columnaBorrar.remove()



    //========== GUARDO EN EL LOCALSTORAGE MI ARRAY DE OBJETOS LISTAPRODUCTOS EN FORMATO JSON 
    let listaProductosJSON = JSON.stringify(listaProductos);

    // console.log(listaProductosJSON);
    // console.log(typeof listaProductos)
    // console.log(typeof listaProductosJSON)

    localStorage.setItem("arrayProductos", listaProductosJSON);

    //========== TRAIGO DEL LOCALSTORAGENMI JSON LISTAPRODUCTOS EN FORMATO OBJETO
    let productosAlmacenados = localStorage.getItem("arrayProductos");
    // console.log (typeof productosAlmacenados, productosAlmacenados);

    let productosArray = JSON.parse(productosAlmacenados);
    console.log(typeof productosArray, productosArray)
}

