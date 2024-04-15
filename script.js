/*Criando cores automáticas */

function mudarCor(){
    function mudar(numero){
        return(Math.random()* numero);
    }
    const cores = `rgb(${mudar(255)}, ${mudar(255)}, ${mudar(255)})`;
    document.body.style.backgroundColor = cores;
}

window.addEventListener('load', function(){
    this.setInterval(function(){
        mudarCor();

    },500)
})







/*CRIANDO SLIDESHOW AUTOMATICO */
//declarando as variaveis

let imagens = ['img/carro1.jpg', 'img/carro2.jpg', 'img/mustang1.jpg'];
let index = 0;
let time = 3000;

function slideShow(){
    document.getElementById('img-car').src=imagens[index];
    index++;
        if(index == imagens.length){
            index = 0;
        }
        setTimeout('slideShow()', time);
}
slideShow();

function validar(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if(usuario === "Admin" & senha === "12345"){
        window.open('dashboard.html');
    }
    else{
        window.close('login.html');
        alert("usuário ou senha inválidos")
    }
}