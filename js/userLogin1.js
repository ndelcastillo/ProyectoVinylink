// peticion a un servidor
async function getUsers() {
    const response = await fetch('../json/user.json');
    const data = await response.json();
    return data
}

async function validateUser(correo, contrasena) {
    let userState = await getUsers();
    let user = userState.find((element) => {
        return element.correo == correo
    })
    if (user) {
        if (user.contrasena == contrasena) {
            localStorage.setItem('user', JSON.stringify(user));
            return true;
        } else {
            alert('la constrasena ingresada no es valida');
        }
    } else {
        alert('correo ingresado no es correcto');
    }
};

function validateInputs (inputUsuario, inputPassword) {
    if (inputUsuario.value.length < 5) {
        alert('el correo debe tener mas de 4 caracteres')
    } else if (inputPassword.value.length < 8) {
        alert('la password debe tener mas de 8 caracteres')
    } else return true
};

let inputUsuario = document.getElementById('inputUsuario')
let inputPassword = document.getElementById('inputPassword')
let btnLoginUser = document.getElementById('btnLoginUser')
console.log(btnLoginUser)

btnLoginUser.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateInputs(inputUsuario, inputPassword)) {
        if (validateUser(inputUsuario.value, inputPassword.value)) {
            window.location.href = '../html/collection.html'
        }
    } 
}); 

