localStorage.setItem("carrito", JSON.stringify([{}]))

let carrito;
let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
console.log(carritoLocalStorage);

if (carritoLocalStorage) {
    carrito =carritoLocalStorage;
} else {
    carrito = []
}

console.log(carrito)


const usuario = {
    nombre: "John Doe",
    edad: 14,
};
const informacionUsuario = {
    edad: "25",
    pais: "Argentina",
    profesion: "Desarrolador",
    telefono: 1141986573,
};
const usuarioCompleto = {
    ...usuario,
    ...informacionUsuario
}
console.log(usuarioCompleto)


function sumar(...numeros) {
    // console.log(numeros);
    const sumatoria = numeros.reduce(
        (acumulador, valor) => acumulador + valor, 0
    )
    return sumatoria
}
console.log(sumar(2, 8, 3, 7, 9))