/*========== LOCALSTORAGE PRODUCTOS DEL CARRITO ==========*/
const carritoCompras = JSON.parse(localStorage.getItem('carritoCompras')) || [];
const contenedorProductosCarrito = document.getElementById('checkout-carrito-compras');
for (const producto of carritoCompras) {
    let div = document.createElement("div")
    div.classList.add('productoEnCarrito');
    div.innerHTML = `
            <div class="carritoAll">
                <div class="carrito">
                    <img class="imgCarrito" src="">
                    <div class="txtCarrito">
                        <div class="box1">
                            <p class="txtName"> ${producto.nombre} - ${producto.artista} </p>
                            <p class="txtType">Type: ${producto.tipo}</p>
                        </div>
                        <div class="box2">
                            <p class="txtQty">${producto.cantidad} x</p>
                            <p class="txtPrice"> $${producto.oferta}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    //Agregamos el nuevo elemento div al contenedor del carrito en el DOM.
    contenedorProductosCarrito.appendChild(div);
}

/*========== LOCALSTORAGE TOTALES DEL CARRITO ==========*/
const precioTotal = JSON.parse(localStorage.getItem('carritoComprasTotal')) || [];
let subtotalCarrito = document.getElementById('subtotal-carrito');
subtotalCarrito.innerText = "$" + precioTotal;

let shippingCarrito = document.getElementById('shipping-carrito');
const shippingTaxesPrices = [0, 500, 1000, 1500, 2000];
shippingCarrito.innerText = "$" + shippingTaxesPrices[1];

let totalCarrito = 0
function sumar(subtotal, shipping) {
    subtotal = parseInt(subtotal);
    shipping = parseInt(shipping);
    totalCarrito = subtotal + shipping;
    return totalCarrito;
}
totalCarrito = sumar(precioTotal, shippingTaxesPrices[1]);
console.log(totalCarrito);

let totalCarritoChekout = document.getElementById('total-carrito');
totalCarritoChekout.innerText = `$${totalCarrito}`;


/*========== FORMULARIO CONTACTO ==========*/
let btnCheckoutInfo = document.getElementById('btn-checkout-info');
let btnCheckoutInfoEmailSignUp = document.getElementById('btn-checkout-email-sign')

// btnCheckoutContacto.addEventListener('click', () => {
//     localStorage.setItem('emailCheckoutContacto', emailCheckout.value)
// })

function guardarDatosCheckoutInfo(storage) {
    let emailCheckout = document.getElementById('inputEmailCheckout').value;
    let nombreCheckout = document.getElementById('inputNombreCheckout').value;
    let apellidoCheckout = document.getElementById('inputApellidoCheckout').value;
    let direccionCheckout = document.getElementById('inputDireccionCheckout').value;
    let detalleCheckout = document.getElementById('inputDetalleCheckout').value;
    let postalCheckout = document.getElementById('inputPostalCheckout').value;
    let ciudadCheckout = document.getElementById('inputCiudadCheckout').value;
    let provinciaCheckout = document.getElementById('inputProvinceCheckout').value;

    const checkoutUsuario = {
        "email": emailCheckout,
        "nombre": nombreCheckout,
        "apellido": apellidoCheckout,
        "direccion": direccionCheckout,
        "detalle": detalleCheckout,
        "postal": postalCheckout,
        "ciudad": ciudadCheckout,
        "provincia": provinciaCheckout
    }

    if (storage === "localStorage") {
        localStorage.setItem('checkoutUsuario', JSON.stringify(checkoutUsuario));
    }

    if (storage === "sessionStorage") {
        sessionStorage.setItem('checkoutUsuario', JSON.stringify(checkoutUsuario));
    }
}

function borrarDatoCheckoutInfo (storage, key) {
    storage.removeItem(key);
}

btnCheckoutInfo.addEventListener('click', () => {
    guardarDatosCheckoutInfo('localStorage')
})

let btnCheckoutInfoGuardado = JSON.parse (localStorage.getItem(checkoutUsuario));

if (btnCheckoutInfoGuardado) {
    //usar info
} else {
    // decir que no hay info
}