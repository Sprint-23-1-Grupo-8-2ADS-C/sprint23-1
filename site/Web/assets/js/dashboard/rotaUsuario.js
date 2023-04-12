
//#region LOGIN
function exibirModal(mensagem) {
    const alertaErro = document.getElementById("alertaErro")

    if (alertaErro.style.display === "block") {
        alertaErro.style.display = "none";
        
    } else {
        
        mensagem_erro.innerHTML = mensagem;
        alertaErro.style.display = "block";

        setTimeout(() => {
            alertaErro.style.display = "none";
        }, 2000);
    }
}

function validar() {

    var emailVar = iptEmail.value;
    var senhaVar = iptSenha.value;

    if (emailVar == "" || senhaVar == "") {
        var mensagemErro = "Todos os campos precisam ser preenchidos"; 
        exibirModal(mensagemErro);
        return false;
    }
    
    div_aguardar.style.display = "block"; 
    
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idFuncionario;
                sessionStorage.ID_COMPANHIA = json.fkCompanhia; 
                sessionStorage.CARGO_USUARIO = json.cargo;

                setTimeout(function () {
                    window.location = "./dashboard/indexDash.html";
                }, 1000);
                
            });
        } 
    }).catch(function (erro) {
        console.log(erro);
    })
}

//#endregion


//#region DASHBOARD
    function mostrarUsuario(){
        const nome = document.getElementById("sp_nome");

        nome.innerHTML = sessionStorage.NOME_USUARIO;
        buscarTotens();
    }
//#endregion

function gerarCodigo() {

    divVerificarCodigo.style.display = "flex";
    var cogidoAleatorio = parseInt(100000 + Math.random() * 100000);

    fetch("/usuarios/enviarCodigo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            codigoServer: cogidoAleatorio
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            setTimeout(() => {
                window.location = "telaupdate";
            }, "2000")


        } 
    }).catch(function (resposta) {

        console.log(`#ERRO: ${resposta}`);
 
    });
    
// pegar codigo do banco e enviar para o email 
//verificar se a chave enviada no email é a mesma digitada 
// dar update na senha 

} 