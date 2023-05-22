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


/*========== LOCALSTORAGE FORMULARIO ==========*/
let checkoutPayInfoName = document.getElementById('checkout-pay-info-name');
let checkoutPayInfoContact = document.getElementById('checkout-pay-info-contact');
let checkoutPayInfoShipping = document.getElementById('checkout-pay-info-shipping')

let checkoutInfoStorage = JSON.parse(localStorage.getItem('checkoutUsuario'))
checkoutPayInfoName.innerText = checkoutInfoStorage.nombre + " " + checkoutInfoStorage.apellido;
checkoutPayInfoContact.innerText = checkoutInfoStorage.email;
checkoutPayInfoShipping.innerText = checkoutInfoStorage.direccion + ", " + checkoutInfoStorage.postal + ", " + checkoutInfoStorage.ciudad + ", " + checkoutInfoStorage.provincia
 
