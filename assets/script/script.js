//tipos de variaveis
//var let const
//var x = "meuy nome é x"
//let x = "meu nome é x";
//let numero = 2;
//const imposto = 10;

//numero = 20 +10;

//alert(imposto + x);
//Date();
//console.log(Date())

const nome = document.getElementById("nome")

const email = document.querySelector("#email")
let txtNome = document.getElementById("txtNome")
function validaNome(){
    if(nome.value.length <2){
        txtNome.innerHTML = "O nome deve ter mais de 2 caracteres"
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = "Campo preenchido corretamente"
        txtNome.style.color = 'green'
    }
    console.log(nome.value)
    console.log(nome.value.length)
}