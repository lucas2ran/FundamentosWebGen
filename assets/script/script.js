/*
por tag: getElementeByTagName()
por id: getElementById()
por nome: getElementByName()
por classe: getElementByClassName()
por seletor: querySeletor()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let telefone = document.querySelector("#telefone")
let mensagem = document.querySelector("#mensagem")

nome.style.width = "30%"
email.style.width = "30%"
telefone.style.width = "30%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
    }

}

function validaEmail() {
    let txtemail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtemail.innerHTML = "Email inválido"
        txtemail.style.color = "red"
    }else{
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"
    }
}

function validaTelefone() {
    let txtTelefone = document.querySelector("#txtTelefone")

    if (telefone.value.length <11){
        txtTelefone.innerHTML = "Telefone inválido"
        txtTelefone.style.color = "red"
    }else{
        txtTelefone.innerHTML = "Telefone válido"
        txtTelefone.style.color = "green"
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")
    
    if (mensagem.value.length >= 100) {
        txtMensagem.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres."
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    }else {
        txtMensagem.style.display = "none"
    }
}  

