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