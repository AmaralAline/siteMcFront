window.onload = function (e)
{

    /*menu hamburguer*/
    const hamburgerButton = document.querySelector("#hamburgerButton");
    const closeButton = document.querySelector("#closeButton");
    const mobileMenu = document.querySelector("#mobileMenu");
    const EuQuero = document.querySelector("#EuQuero");
    /*abaixo vamos colocar dois eventos de clicks*/
    hamburgerButton.addEventListener("click", function () {
        mobileMenu.classList.add("flex"); /*PAra n�o ter problema na largura de tela trabalhamos com classe*/
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

    // Adiciona um event listener para garantir que o c�digo s� execute ap�s o carregamento do DOM
    document.addEventListener("DOMContentLoaded", function () {
        // Seleciona o elemento com id "typing-title"
        const title = document.getElementById("typing-title");

        // Adiciona um listener para o evento de t�rmino da anima��o
        title.addEventListener("animationend", function (event) {
            // Verifica se a anima��o que terminou � a de digita��o
            if (event.animationName === "typing") {
                // Adiciona a classe "typing-finished" ao t�tulo
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

                    spnMensagem.innerText = "Ol�" + result.nome;

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




