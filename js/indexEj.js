// let titulo = document.getElementById("titulo")
// console.log (titulo.innerText)

// titulo.innerText = "My Collection"
// console.log(titulo.innerText)

//===================== OPC 1
//===== Agregar texto
// let nuevoTitulo = prompt("Ingresa el nuevo titulo")
// txtTitle.innerText = nuevoTitulo

//===== Agregar CSS
// txtTitle.className="txtTitleStyle"
// console.log(titulo.className)

//===================== OPC 2
//===== Agregar elemento <div>
// let container = document.getElementById ("contenedor");
// container.innerHTML = 
// "<h1>My Vinyl Collection</h1>"
// ===== Agregar class
// container.className="contendorStyle"
//===== Modificar texto
// container.innerText = "My Name"
//===== Eliminar texto
// container.remove()

//===================== OPC 3
// let parrafo = document.createElement ('div')
// parrafo.innerHTML = `<h1 class="contendorStyle col-lg-12"> My Collection New </h1>`
// document.body.append(parrafo)



//========== EVENTOS DE EJEMPLO
// let botonUno = document.getElementById("btnEventoBuscar")
// botonUno.addEventListener ("click", () => {
//     alert("Buscando")
// })
// let botonDos = document.getElementById("btnEventoBorrar")
// botonDos.onclick = () => {
//     alert("Borrado")
// }

// let inputNombre = document.getElementById("nombre")
// let inputEdad = document.getElementById("edad")

// inputNombre.onkeydown = (event) => {
//     console.log (`Se oprimio la tecla ${event.key}, evento down`)
// }
// inputEdad.onkeyup = () => {
//     console.log  ("Se oprimió un boton, evento up")
// }


//========== LOCALSTORAGE DE EJEMPLO
//===== OBJETO A JSON > .STRINGIFY
// const users = [
//     { user1: "ndelcastillo", password: "tierri95" },
//     { user2: "martaNuk", password: "hola1234" },
// ]
// const enJSON = JSON.stringify(users);

// console.log(enJSON);
// console.log(typeof users)
// console.log(typeof enJSON)

// localStorage.setItem("users", enJSON)

//===== JSON A OBJETO > .PARSE
// const enJSON = `{"id":1,"name":"ndelcastillo","password":"tierri95"}`
// const users1 = JSON.parse(enJSON)

// console.log(typeof enJSON)
// console.log(typeof users1)
// console.log(users1.password)

// const users2 = JSON.parse(localStorage.getItem("users1"));
// console.log(users2.id)


//========== TITLE COLLECTION
//===== Agregar elemento <div>
// let container = document.getElementById("contenedor");
// container.innerHTML =
//     "<h1>My Collection</h1>"
// ===== Agregar class
// container.className = "contendorStyle"
//===== Modificar texto
// container.innerText = "My Name"
//===== Eliminar texto
// container.remove()



//===================== FECHAS
// console.log(new Date())

// const cumpleNico = new Date(1995, 11, 17, 00, 00, 00)
// let cumpleNicoString = new Date("December 17, 1995 00:00:00")
// console.log(cumpleNico)
// console.log(cumpleNicoString)

// const cumpleSanti = new Date(1997,0,28)
// console.log (cumpleSanti)

// const cumpleMama = new Date(1962,7,4)
// console.log (cumpleMama)

// const cumpleAna = new Date(1989,1,14)
// console.log (cumpleAna)

// //==========VALORES SINGULARES DE UNA FECHA
// const hoy = new Date()
// console.log(`El día de hoy es ${hoy}`)
// console.log(`El día de hoy es ${hoy.getDay()}`)
// console.log(`El mes de hoy es ${hoy.getMonth()}`)
// console.log(`El año de hoy es ${hoy.getFullYear()}`)

// //==========FORMATOS DE FECHA A PARTIR DE UN CONSTRUCTOR
// const hoyCumple = new Date("December 17, 1995")
// console.log(hoy.toDateString())
// console.log(hoy.toLocaleString())
// console.log(hoy.toLocaleDateString())
// console.log(hoy.toTimeString())

// //==========FECHA DE NACIMIENTO
// const fechaActual = new Date ();
// const milisegundosPorDia = 86400000;

// let dia = parseInt (prompt("Ingresa tu dia de nacimiento"));
// let mes = parseInt (prompt("Ingresa tu mes de nacimiento"));
// let anio = parseInt (prompt("Ingresa tu año de nacimiento"));

// const cumpleanios = new Date (anio, mes - 1, dia);
// const diferenciaDias = (fechaActual - cumpleanios) / milisegundosPorDia;
// const diferenciaAnios = diferenciaDias / 365;

// // alert(`Naciste hace ${diferenciaAnios} años`)
// alert(`Naciste hace ${Math.floor(diferenciaAnios)} años`) // ESTE ES EL CORRECTO
// // alert(`Naciste hace ${Math.ceil(diferenciaAnios)} años`)


//===================== OPERADOR REST
// function sumar(...numeros) {
//     // console.log(numeros);
//     const sumatoria = numeros.reduce(
//         (acumulador, valor) => acumulador + valor, 0
//     )
//     return sumatoria
// }
// console.log(sumar(2, 8, 3, 7, 9))


//===================== SET INTERVAL
// let counter = 0
// const interval = setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)

//     if (counter >= 20) {
//         clearInterval(interval)
//         console.log("Se removio el interval")
//     }
// })

//===================== PROMESA
// const eventoFuturo = (response) => {
//     return new Promise((resolve, reject) => {
//         if (response === true) {
//             resolve('Pormesa resuelta')
//         } else {
//             reject('Promesa rechazada')
//         }
//     })
// }
// console.log(eventoFuturo(true))
// console.log(eventoFuturo(false))

// eventoFuturo(true)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("Fin del proceso")
//     })

// eventoFuturo(false)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("Fin del proceso")
//     })


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("resuelto")
//     }, 2000)
// })
// console.log(promesa)


// promesa.then((response) => {
//     console.log(response)
// })


//===================== ARROW FUNCTION
// function add(a, b) {
//     return a + b;
// }
// console.log(add(22,4))

// const plus = (a, b) => {
//     return a + b;
// }
// console.log(plus(22,4))

// const sumar = (a,b) => a + b;
// console.log(sumar(22,4))