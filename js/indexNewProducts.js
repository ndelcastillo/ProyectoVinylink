const listaProductosNuevos = [
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

const contenedorNewArrivals = document.getElementById("contenedor-new-arrivals")
for (const productos of listaProductosNuevos) {
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
                </div>
            </div>
        </div>`;
        contenedorNewArrivals.appendChild(column)

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
    let newArrivalsJSON = JSON.stringify(listaProductosNuevos);

    localStorage.setItem("listaProductosNuevos", newArrivalsJSON);

    //========== TRAIGO DEL LOCALSTORAGENMI JSON LISTAPRODUCTOS EN FORMATO OBJETO
    let newArrivalsAlmacenados = localStorage.getItem("listaProductosNuevos");

    let newArrivalsArray = JSON.parse(newArrivalsAlmacenados);
    console.log(typeof newArrivalsArray, newArrivalsArray)
}

