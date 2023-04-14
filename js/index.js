const listaProductos = [
    {
        id: 1,
        nombre: "The Drak Side Of The Moon",
        artista: "Pink Floyd",
        anio: "2016",
        genero: "Rock",
        tipo: "LP",
        precio: 5000,
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
        cantidad: 1,
        img: "assets/images/productos/siamese-dream-smashing-pumpkins.jpeg"
    },
]

const contenedorProductos = document.getElementById("contenedor-productos")
for (const productos of listaProductos) {
    let column = document.createElement("div")
    column.className = "col-lg-3 mt-5 pt-3 d-flex justify-content-center align-items-center";
    column.id = `columna-${productos.id}`;
    column.innerHTML = `
        <div class = "card position-relative" style="width:17rem">
            <div class="card-top">
                <img src=${productos.img} class="card-img-top" alt="coverAlbum">
                <button type="button" class="btn btnAgregarCarrito shadow-sm btn-outline-secondary position-absolute top-100 end-50 start-0"><span>Agregar al carrito</span>
                </button>
                <button type="button" class="btn btnEliminar shadow-sm btn-outline-secondary position-absolute top-100 end-0 start-50"><span>Eliminar</span>
                </button>
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

    contenedorProductos.append(column)
}
// // ========== Borrar una card
// let columnaBorrar = document.getElementById("columna-1")
// columnaBorrar.remove()


//===================== OPC 2
//===== Agregar elemento <div>
let container = document.getElementById("contenedor");
container.innerHTML =
    "<h1>Shop</h1>"
// ===== Agregar class
container.className = "contendorStyle"
//===== Modificar texto
// container.innerText = "My Name"
//===== Eliminar texto
// container.remove()
