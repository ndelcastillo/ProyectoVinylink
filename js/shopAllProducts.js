const contenedorShop = document.getElementById("contenedor-productos-shop");

const listaProductosAll = [
    {
        id: 1,
        nombre: "Bocanada",
        artista: "Gustavo Cerati",
        anio: "1999",
        genero: "Rock",
        tipo: "LPX2",
        precio: 8000,
        oferta: '',
        cantidad: 1,
        img: "../assets/images/productos/bocanada-gustavo-cerati.jpeg"
    },
    {
        id: 2,
        nombre: "Artaud",
        artista: "Spinetta",
        anio: "1980",
        genero: "Rock",
        tipo: "LP",
        precio: 7000,
        oferta: '',
        cantidad: 1,
        img: "../assets/images/productos/artaud-spinetta.jpeg"
    },
    {
        id: 3,
        nombre: "Clicks Modernos",
        artista: "Charly Garcia",
        anio: "1995",
        genero: "R&Rock",
        tipo: "LPx2",
        precio: 8000,
        oferta: '',
        cantidad: 1,
        img: "../assets/images/productos/clicks-modernos-charly-garcia.jpeg"
    },
    {
        id: 4,
        nombre: "Mordisco",
        artista: "Emmanuel Horvilleur",
        anio: "2023",
        genero: "Electronic",
        tipo: "LP",
        precio: 5000,
        oferta: '',
        cantidad: 1,
        img: "../assets/images/productos/mordisco-emanuel.jpeg"
    },
];

const pedirProductosShop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaProductosAll);
        }, 1000);
    });
};

const pintarProductosShop = () => {
    productosShop.forEach((producto) => {
        const column = document.createElement("div")
        column.className = "col-lg-3 col-12 mt-5 pt-3 d-flex justify-content-center align-items-center";
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
            <div class = "card position-relative" style="width:17rem">
                <div class="card-top">
                    <img src=${producto.img} class="card-img-top" alt="coverAlbum">
                    <button type="button" id=boton${producto.id} class="btn btnAgregarCarrito shadow-sm btn-outline-secondary position-absolute top-100 end-0 start-0">Add to cart</button>
               </div>
                <div class="card-body">
                        <div class="cardTitle">
                        <h5 class="cardName"> ${producto.nombre} </h5>
                    </div>
                    <h6 class="cardArtist"> ${producto.artista} </h6>
                    <div class="cardTxt mt-4">
                        <p class="cardYear"> ${producto.anio} </p>
                        <p class="cardGenre"> ${producto.genero} </p>
                        <p class="cardKind"> ${producto.tipo} </p>
                    </div>
                    <div class="cardTxtPrice">
                        <p class="cardPrice"> $ ${producto.precio} </p>
                    </div>
                </div>
            </div>`;

            contenedorShop.append(column)

            const boton = document.getElementById(`boton${producto.id}`)
            boton.addEventListener('click', () => {
                Toastify({
                    text: `"${producto.nombre}" added to cart`,
                    duration: 3000,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        color: "white",
                        background: "rgb(60, 129, 60)",
                    },
                }).showToast();
            })
    })
}

let productosShop = [];

function main() {
    pedirProductosShop()
        .then((response) => {
            productosShop = [...response];
            console.log(response);
            pintarProductosShop();
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("Esto se ejecuta al final");
        });
}
main()


