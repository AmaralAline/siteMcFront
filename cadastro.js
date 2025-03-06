window.onload = function (e) {
    var nomeinput = document.getElementById("nome");
    var sobrenomeinput = document.getElementById("sobrenome");
    var emailinput = document.getElementById("email");
    var telefoneinput = document.getElementById("telefone");
    var generoinput = document.getElementById("genero");
    var ondeConheceuinput = document.getElementById("ondeConheceu");
    var senhainput = document.getElementById("senha");
    var cadastro = document.getElementById("cadastro");

    if (nomeinput) nomeinput.focus();

    if (cadastro) {
        cadastro.onclick = function (e) {
            e.preventDefault(); // Evita recarregar a página

            var nome = nomeinput.value;
            var sobrenome = sobrenomeinput.value;
            var telefone = telefoneinput.value;
            var email = emailinput.value;
            var genero = generoinput.value;
            var senha = senhainput.value;
            var ondeConheceu = ondeConheceuinput.value;

            if (!nome || !sobrenome || !telefone || !email || !genero || !ondeConheceu || !senha) {
                exibirMensagemErro("Preencha todos os campos.");
            } else {
                cadastrado(nome, sobrenome, telefone, email, senha, genero, ondeConheceu);
            }
        };
    }

    function exibirMensagemErro(mensagem) {
        var spnErro = document.getElementById("spnErro");
        if (spnErro) {
            spnErro.innerText = mensagem;
            spnErro.style.display = "block";
            setTimeout(() => {
                spnErro.style.display = "none";
            }, 10000);}
        
    }

    function cadastrado(nome, sobrenome, telefone, email, senha, genero, ondeConheceu) {
        var data = JSON.stringify({
            "nome": nome,
            "sobrenome": sobrenome,
            "telefone": telefone,
            "email": email,
            "genero": genero,
            "ondeConheceu": ondeConheceu,
            "senha": senha
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                
                    var result = JSON.parse(this.responseText);
                    if (result.sucesso) {
                        localStorage.setItem("usuarioGuid", result.usuarioGuid);
                        window.location.href = 'home.html';
                    } else {
                        exibirMensagemErro(result.mensagem);
                    }
                
            }
        });

        xhr.open("POST", "https://localhost:44304/api/usuario/cadastro");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    }
    closeButton.onclick = function (e) {
        if (mobileMenu.classname == "hamburgerButton") {
            mobileMenu.classname += "open";
        }
        else {
            mobileMenu.className == "hamburgerButton";
        }


    }

};


