/*menu hamburguer*/
const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");
const mobileMenu = document.querySelector("#mobileMenu");
const EuQuero = document.querySelector("#EuQuero");
/*abaixo vamos colocar dois eventos de clicks*/
hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex"); /*PAra não ter problema na largura de tela trabalhamos com classe*/
}); /*fim menu hambuger*/

closeButton.onclick = function (e) { 
    if (mobileMenu.classname == "hamburgerButton") {
        mobileMenu.classname += "open";
    }
    else {
        mobileMenu.className == "hamburgerButton";
    }
    

}

closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex"); /*remover a class flex*/
});

// Adiciona um event listener para garantir que o código só execute após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o elemento com id "typing-title"
    const title = document.getElementById("typing-title");

    // Adiciona um listener para o evento de término da animação
    title.addEventListener("animationend", function (event) {
        // Verifica se a animação que terminou é a de digitação
        if (event.animationName === "typing") {
            // Adiciona a classe "typing-finished" ao título
            title.classList.add("typing-finished");
        }
    });
});

document.getElementById('EuQuero').addEventListener('click', function() {
    window.location.href = 'MCMMsobre.html';
});

    


