window.onload = function(e) {

    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var genero = document.getElementById("genero");
    var ondeConheceu = document.getElementById("ondeConheceu");
    var senha = document.getElementById("senha");
    var cadastro = document.getElementById("cadastro");
    nome.focus();

    cadastro.onclick = function(e) {

        e.preventDefault(); /*para validar o cadastro sem recarregar*/

        var nome = nome.value;
        var sobrenome = sobrenome.value;
        var telefone = telefone.value;
        var email = email.value;
        var genero = genero.value;
        var senha = senha.value;
        var ondeConheceu = ondeConheceu.value;

        if (nome == "" ||
            sobrenome == "" ||
            telefone == "" ||
            email == "" ||
            genero == "" ||
            ondeConheceu == "" ||
            senha == "" || ) {
            var mensagem = "Preencha todos os Campos";
            exibirMensagemErro(mensagem);
        }



















    };
};
