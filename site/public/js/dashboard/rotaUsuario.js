//#region LOGIN
function exibirModal(mensagem) {
  const alertaErro = document.getElementById("alertaErro");

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
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      if (resposta.status == 200) {
        resposta.json().then((json) => {
          if (json.idFuncionario != null) {
            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.NOME_USUARIO = json.nome;
            sessionStorage.ID_USUARIO = json.idFuncionario;
            sessionStorage.ID_COMPANHIA = json.fkCompanhia;
            sessionStorage.CARGO_USUARIO = json.cargo;
          } else {
            exibirModal("Email ou senha inválidos");
          }

          setTimeout(function () {
            window.location = "./dashboard/indexDash.html";
          }, 1000);
        });
      } else {
        div_aguardar.style.display = "none";
        exibirModal("Email ou senha inválidos!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

//#endregion

//#region DASHBOARD
function mostrarUsuario() {
  const nome = document.getElementById("spNome");

  nome.innerHTML = sessionStorage.NOME_USUARIO;
  buscarTotens();
}
//#endregion

function gerarCodigo() {
  var emailVar = forgetEmail.value;

  fetch("/usuarios/TrocarSenha", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        divVerificarCodigo.style.display = "flex";
      } else {
        exibirModal("Email inválido");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function verificarCodigo() {
  var verificar = iptVerifica.value;
  var emailVar = forgetEmail.value;

  fetch("/usuarios/verificacao", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      verificarServer: verificar,
      emailServer: emailVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        window.location = "./trocarSenha.html";
      } else {
        exibirModal("Código inválido");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function validarSenha() {
  var novasenha = senhaNova.value;
  var confirmaSenha = confirmaSenha.value;
  var emailVar = forgetEmail.value;

  if (novasenha == confirmaSenha) {
    fetch("/usuarios/updateSenha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        novasenhaServer: novasenha,
        emailServer: emailVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          exibirModal("Troca realizada com sucesso!");
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  } else {
    exibirModal("Senhas diferentes");
  }
}

var paginaAtual = 1;
var itensPorPagina = 4;

async function getUsersByCompany() {
  const fkCompanhia = sessionStorage.ID_COMPANHIA;

  try {
    const res = await fetch(`/usuarios/usersByCompany/${fkCompanhia}`);
    const users = await res.json();

    const listaFuncionarios = document.getElementById("listaFuncionarios");

    document.getElementById('qtdFuncionarios').innerHTML = `${users.length}`

    users.forEach((user) => {
      listaFuncionarios.innerHTML += `
                    <li class="funcionario">
                        <div class="divIcon">
                            <a href="#"><i class="fa-solid fa-user"></i> </a>
                        </div>
                        <div class="divInfo">
                            <h3>${user.nome}</h3>
                            <p>${user.email}</p>
                        </div>
                        <div class="divCargo">
                            <p>${user.cargo}</p>
                        </div>
                    </li>
            `;
    });

    // Configurações
    var li = document.getElementsByTagName("li");

    // Seleciona os elementos da página
    var lista = document.getElementById("listaFuncionarios");
    var paginacao = document.getElementById("paginacao");

    // Calcula o número de páginas
    var numPaginas = li.length / itensPorPagina;

    // Cria os botões de página
    for (var i = 1; i <= numPaginas; i++) {
      var btn = document.createElement("input");
      btn.type = "radio";
      btn.name = "paginas";
      btn.value = i;
      btn.id = "pagina" + i;
      mostrarItens();

      btn.addEventListener("checked", function () {
        paginaAtual = parseInt(this.value);
        mostrarItens();
      });

      var label = document.createElement("label");
      label.innerHTML = i;
      label.setAttribute("for", "pagina" + i);

      var div = document.createElement("div");
      div.appendChild(btn);
      div.appendChild(label);

      paginacao.appendChild(btn);
    } 
  } catch (err) {
    console.log(err);
  }
}
    // Mostra os itens da página atual
function mostrarItens() {
    const li = document.getElementsByTagName('li')

    console.log(li.length);
    // Oculta todos os itens
    for (var i = 0; i < li.length; i++) {
      li[i].classList.remove("mostrando");
    }

    // Mostra apenas os itens da página atual
    var inicio = (paginaAtual - 1) * itensPorPagina;
    var fim = inicio + itensPorPagina;
    for (var i = inicio; i < fim && i < li.length; i++) {
      li[i].classList.add("mostrando");
    }
  }

async function cadastrarUsuario() {
  const fkCompanhia = sessionStorage.ID_COMPANHIA;
  const nome = iptNome.value;
  const email = iptEmail.value;
  const senha = iptSenha.value;
  const confirmaSenha = iptCfmSenha.value;
  const cargo = selCargo.value;

  if (senha === confirmaSenha) {
    console.log("senha confirmada");
  } else {
    console.log("senha diferente");
  }

  try {
    const req = await fetch(`/usuarios/cadastrarUsuario/${fkCompanhia}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
        cargo
      })
    }) 

    if (req.ok) {
      console.log("Requisição feita");
    } else {
      console.log("Erro ao fazer a requisição");
    }
  } catch (err) {
    console.error(err);
  }
}