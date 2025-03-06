window.onload =function(e) {

    var loginEntrar = document.getElementById("LoginEntrar");
    var emailinput = document.getElementById("email");

    email.focus();

    loginEntrar.onclick = function (e) {
        e.preventDefault();

        var email = emailinput.value;

        if (email == "") {
            var mensagem = " Preencher Email";
            exibirMensagemErro(mensagem);
        }
        else {
            realizarLogin(email);

        }

        function exibirMensagemErro(mensagem) {
            var spnErro = document.getElementById("spnErro");
            spnErro.innerText = mensagem;
            spnErro.style.display = "block";
            setTimeout(function () { /*Estou passando uma função como parametro para outra função, no caso aqui para ExibirmensagemErro*/
                spnErro.style.display = "none"; /*Aqui a função está pegando o display e colocando ele visivel*/
            }, 20000);  /*3000´= 3 segundos, a tela será exibida em 5 segundos*/
        }
    }
    function realizarLogin(email) {

        // WARNING: For POST requests, body is set to null by browsers.
        var data = JSON.stringify({
            "email": "email"
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var result = JSON.parse(this.responseText);
                if (result.sucesso) {

                    alert("Email enviado com sucesso!")
                }
            }
        });

        xhr.open("POST", "https://localhost:44332/api/usuario/esqueceuSenha");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);

    }
}