/*
//-----------------Sitio Login--------------
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");
const formulario = document.querySelector("#formLogin");
console.log(formulario);

function validarUsuario(){
    const email = inputEmail.value;
    const pass = inputPassword.value;
    alert("Has iniciado sesión!");
}


formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault(); //evito que el formulario recargue la página
    console.log(evento);
    validarUsuario();
})
*/