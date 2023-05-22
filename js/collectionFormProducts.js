//Variables de informacion
let productos = [];
// let usuario;

// Variables para elementos de autenticación y usuario
// let formularioIdentificacion;
// let contenedorIdentificacion;
// let contenedorUsuario;
// let textoUsuario;
let limpiarStorage;

// Variables para formulario de productos
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
        this.nombre = nombre;
        this.artista = artista;
        this.anio = anio;
        this.genero = genero;
        this.tipo = tipo;
        this.precio = precio;
        this.img = img;
    }
}

function inicializarElementos() {
    // formularioIdentificacion = document.getElementById('formularioIdentificacion');
    // inputUsuario = document.getElementById('inputUsuario');
    // contenedorIdentificacion = document.getElementById('contenedorIdentificacion');
    // contenedorUsuario = document.getElementById('contenedorUsuario');
    // textoUsuario = document.getElementById('textoUsuario');
    //
    limpiarStorage = document.getElementById('btnLimpiarStorage')
    //
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
    contenedorProductos = document.getElementById('contenedorFormProducto');
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
    console.log(document.getElementById(formulario));
    // formularioIdentificacion.onsubmit = (event) => identificarUsuario(event);
    limpiarStorage.onclick = eliminarStorage;

    inputImg.addEventListener('change', function () {
        const image = this.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            contenedorImagen.appendChild(img);
        };
        reader.readAsDataURL(image);
    });
}

function eliminarStorage() {
    const btnClearCollection = document.getElementById('btnLimpiarStorage');
    btnClearCollection.addEventListener('click', () => {
        Swal.fire({
            icon: 'warning',
            text: '¿Are you sure you want to clear your collection?',
            confirmButtonText: 'Clear All',
            showCancelButton: true,
            cancelButtonText: 'Cancel'
        }).then((resultado) => {
            console.log(resultado)
            if (resultado.isConfirmed == true) {
                localStorage.clear();
                productos = [];
                pintarProductos();
                Swal.fire({
                    icon: 'success',
                    text: 'Collection empty',
                    confirmButtonText: 'Accept',
                    timer: 2000,
                })
            }
        })
    })

    // localStorage.clear();
    // usuario = "";
    // productos = [];
    // mostrarFormularioIdentificacion();
    // pintarProductos();
}

// function identificarUsuario(event) {
//     event.preventDefault();
//     usuario = inputUsuario.value;
//     formularioIdentificacion.reset();
//     actualizarUsuarioStorage();
//     mostrarTextoUsuario();
// }

// function mostrarTextoUsuario() {
//     contenedorIdentificacion.hidden = true;
//     contenedorUsuario.hidden = false;
//     textoUsuario.innerHTML += ` ${usuario}`;
// }

// function mostrarFormularioIdentificacion() {
//     contenedorIdentificacion.hidden = false;
//     contenedorUsuario.hidden = true;
//     textoUsuario.innerHTML = ``;
// }

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

    const existeIdNombre = productos.some((producto) => producto.nombre === nombre || producto.id === idProducto);
    if (!existeIdNombre) {
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
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
            producto.img = reader.result;
            productos.push(producto);
            formulario.reset();
            Toastify({
                text: `"${producto.nombre}" added to collection`,
                duration: 3000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    color: "white",
                    background: "orange",
                },
            }).showToast();
            actualizarProductosStorage();
            pintarProductos();
        };
    } else {
        Toastify({
            text: `That vinyl already exist`,
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                color: "white",
                background: "rgb(30, 30, 216)",
            },
        }).showToast();
    }
}

function eliminarProducto(idProducto) {
    let columnaBorrar = document.getElementById(`columna-${idProducto}`);
    let indiceBorrar = productos.findIndex(
        (producto) => Number(producto.id) === Number(idProducto)
    );
    productos.splice(indiceBorrar, 1);
    columnaBorrar.remove();
    actualizarProductosStorage();
}

function pintarProductos() {
    contenedorProductos.innerHTML = "";
    productos.forEach((producto) => {
        let column = document.createElement('div');
        column.className = "col-lg-3 mt-5 pt-3 d-flex justify-content-center align-items-center";
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
            <div class = "card position-relative" style="width:18rem">
                <div class="card-top">
                    <img class="card-img-top" src=${producto.img}>
                    <button type="button" class="btn btnEliminar shadow-sm btn-outline-secondary position-absolute top-100 end-0 start-0" id="botonEliminar-${producto.id}">Eliminar</button>
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
                        <p class="cardId">(${producto.id}) </p> 
                        <p class="cardPrice"> $ ${producto.precio} </p>
                    </div>
                </div>
            </div>`;

        contenedorProductos.append(column)

        const botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
        botonEliminar.addEventListener('click', () => {
            eliminarProducto(producto.id);
            Toastify({
                text: `"${producto.nombre}" deleted from collection`,
                duration: 3000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    color: "white",
                    background: "rgb(255, 60, 60)",
                },
            }).showToast();
        })

        //Metodos
        productos.sort((productoUno, productoDos) => productoUno.id - productoDos.id)
        let elementosEncontrados = productos.filter((producto) => producto.precio <= 5000);
        console.log(elementosEncontrados)
    })
}

function actualizarProductosStorage() {
    let productosJSON = JSON.stringify(productos)
    localStorage.setItem("colleccion", productosJSON)
}

// function actualizarUsuarioStorage() {
//     localStorage.setItem("usuario", usuario);
// }

function obtenerProductosStorage() {
    let productosJSON = localStorage.getItem("colleccion")
    if (productosJSON) {
        productos = JSON.parse(productosJSON);
        pintarProductos();
    }
}

// function obtenerUsuarioStorage() {
//     let usuarioAlmacenado = localStorage.getItem("usuario");
//     if (usuarioAlmacenado) {
//         usuario = usuarioAlmacenado;
//         mostrarTextoUsuario();
//     }
// }

function main() {
    inicializarElementos();
    inicializarEventos();
    obtenerProductosStorage();
    // obtenerUsuarioStorage();
}

main();

