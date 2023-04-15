let productos = [];

let formulario;
let inputId;
let inputNombre;
let inputArtista;
let inputAnio;
let inputGenero;
let inputTipo;
let inputPrecio;
let inputImg;
let contenedorProductos;

class Producto {
    constructor(id, nombre, artista, anio, genero, tipo, precio, img) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.artista = artista;
        this.anio = anio;
        this.genero = genero;
        this.tipo = tipo;
        this.precio = precio;
        this.img = img;
    }
}

function inicializarElementos() {
    formulario = document.getElementById('formularioProducto');
    inputId = document.getElementById('inputIdProducto');
    inputNombre = document.getElementById('inputNombreProducto');
    inputArtista = document.getElementById('inputArtistaProducto');
    inputAnio = document.getElementById('inputAnioProducto');
    inputGenero = document.getElementById('inputGeneroProducto');
    inputTipo = document.getElementById('inputTipoProducto');
    inputPrecio = document.getElementById('inputPrecioProducto');
    inputImg = document.getElementById('inputImgProducto');
    contenedorImagen = document.getElementById('contenedorImagen');
    contenedorProductos = document.getElementById("contenedorFormProducto");
}

function inicializarEventos() {
    inputImg.addEventListener('change', function () {
        const image = this.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            contenedorImagen.appendChild(img); // replace `imgArea` with `contenedorImagen`
        };
        reader.readAsDataURL(image);
    });
    formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
    event.preventDefault();
    let idProducto = inputId.value;
    let nombre = inputNombre.value;
    let artista = inputArtista.value;
    let anio = parseInt(inputAnio.value);
    let genero = inputGenero.value;
    let tipo = inputTipo.value;
    let precio = parseFloat(inputPrecio.value);
    let img = inputImg.files[0]

    const idExiste = productos.some((producto) => producto.id === idProducto);
    if (!idExiste) {
        let producto = new Producto(
            idProducto,
            nombre,
            artista,
            anio,
            genero,
            tipo,
            precio,
            '',
        );
        // Read the contents of the uploaded image as a data URL
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
            // Set the src attribute of the img element in the HTML string to the data URL
            producto.img = reader.result;
            productos.push(producto);
            formulario.reset();
            pintarProductos();
        };
    } else {
        alert("El id ya existe");
    }
}

function eliminarProducto(idProducto) {
    let columnaBorrar = document.getElementById(`columna-${idProducto}`);
    let indiceBorrar = productos.findIndex(
        (producto) => Number(producto.id) === Number(idProducto)
    );
    productos.splice(indiceBorrar, 1);
    columnaBorrar.remove();
}

function pintarProductos() {
    contenedorProductos.innerHTML = "";
    productos.forEach((producto) => {
        let column = document.createElement('div');
        column.className = "col-lg-3 mt-5 pt-3 d-flex justify-content-center align-items-center";
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
            <div class = "card position-relative" style="width:17rem">
                <div class="card-top">
                    <img class="w-100" src=${producto.img}>
                    <button type="button" class="btn btnEliminar shadow-sm btn-outline-secondary position-absolute top-100 end-0 start-0" id="botonEliminar-${producto.id}"><span>Eliminar</span>
                    </button>
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

        contenedorProductos.append(column)

        let botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
        botonEliminar.onclick = () => eliminarProducto(producto.id);
    })
}

function main() {
    inicializarElementos();
    inicializarEventos();
}

main();


//===== Agregar elemento <div>
let container = document.getElementById("contenedor");
container.innerHTML =
    "<h1>My Collection</h1>"
// ===== Agregar class
container.className = "contendorStyle"
//===== Modificar texto
// container.innerText = "My Name"
//===== Eliminar texto
// container.remove()
