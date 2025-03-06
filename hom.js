window.onload = function (e)
{

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

    document.getElementById('EuQuero').addEventListener('click', function () {
        window.location.href = 'MCMMsobre.html';
    });


    var usuarioGuid = localStorage.getItem("usuarioGuid");

    if (usuarioGuid == null)
    {
        
        window.location.href = "login.html";

    }

    else
    {
            ObterUsuario(usuarioGuid);
    }

    var LnkSair = document.getElementById("lnkSair");

    LnkSair.onclick = function (e)
    {

            localStorage.removeItem("usuarioGuid");

            window.location.href = "MCMMlogin.html";

    }

    function ObterUsuario(usuarioGuid)
    {
        // WARNING: For GET requests, body is set to null by browsers.

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function ()
        {

            if (this.readyState === 4) {

                var result = JSON.parse(this.responseText);

                if (result.sucesso)
                {

                    var spnMensagem = document.getElementById("spnMensagem");

                    spnMensagem.innerText = "Olá" + result.nome;

                }
                else
                {
                    window.location.href = "login.html";
                }
            }
        });

        xhr.open("GET", "https://localhost:44304/api/usuario/ObterUsuario?usuarioGuid=" + usuarioGuid);

        xhr.send();
    }


}




