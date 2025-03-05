window.onload = function (e)
{

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




