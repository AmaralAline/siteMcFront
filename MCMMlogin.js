window.onload = function (e){
    var loginEntrar= document.getElementById("LoginEntrar")
    var emailinput = document.getElementById("email")
    var senhainput = document.getElementById("senha")

    if (emailinput) emailinput.focus();

    if (loginEntrar)
    {
        loginEntrar.onclick = function (e) {

            e.preventDefault();

            var email = emailinput.value;
            var senha = senhainput.value;

            if (email == "" || senha == "") {
                var mensagem = "Preencha todos os campos";
                exibirMensagemErro(mensagem);

            }

            else {
               
                realizarLogin(email, senha);
               
            }
        }
    }
        function exibirMensagemErro(mensagem) {
            var spnErro = document.getElementById("spnErro");   /*spn � um elemento existente,mas invisivel na tela*/
            spnErro.innerText = mensagem; /*coloco o parametro  informe senha e informe email para "mensagem"*/
            spnErro.style.display = "block"; /*Estou atribuindo estilo no js, antes estava invisivel agora fica visivel*/

            setTimeout(function () { /*Estou passando uma fun��o como parametro para outra fun��o, no caso aqui para ExibirmensagemErro*/
                spnErro.style.display = "none"; /*Aqui a fun��o est� pegando o display e colocando ele visivel*/
            }, 10000);  /*10000�= 10 segundos, a tela ser� exibida em 5 segundos*/
        }
    
        function realizarLogin(email, senha) {
           
            var data = JSON.stringify({
                "email": email,
                "senha": senha
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {

                    var loginResult = JSON.parse(this.responseText);

                    if (loginResult.sucesso)
                    {

                        localStorage.setItem("usuarioGuid", loginResult.usuarioGuid);
                        window.location.href = 'home.html';

                    }
                    else
                    {
                        exibirMensagemErro(loginResult.mensagem);
                    }
                }
            });

            xhr.open("POST", "https://localhost:44304/api/usuario/login");
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(data);
           
        }
    
};