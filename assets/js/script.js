let nome = window.document.getElementById('nome')

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')

let nomeOk = false 
let emailOk = false 
let assuntoOk = false 


// nome.style.width = '100%'
// email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
    txtNome.innerHTML = 'Nome é inválido'
    txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome é válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = 'Email inválido'
    txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Nome é válido'
        txtEmail.style.color = 'green'
        emailOk = true

    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true

    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso")
    }else{
        alert("Preencha o formulário corretamente antes de enviar")
    }
}

// function motoZoom(){
//     moto.style.width = '400px'
//     moto.style.height = '250px'
// }

// function motoNormal(){
//     moto.style.width = ''
//     moto.style.height = ''
// }