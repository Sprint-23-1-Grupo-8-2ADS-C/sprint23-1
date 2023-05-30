var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function buscarUsuario(req, res) {
    var id = req.params.idUsuario;

    usuarioModel.buscarUsuario(id).then((resultado) => {
        res.status(200).json(resultado);
    })
        .catch((erro) => {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha).then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length == 1) {
                    console.log(resultado);

                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}
function updateSenha(req, res){
    var senha = req.body.novasenhaServer;
    var email = req.body.emailServer;

    usuarioModel.updateSenha(senha, email).then((resultado) => {

        res.status(200).jason(resultado); 


    })
    .catch((erro) => {
        console.log(erro);
        console.log("Houve um erro ao atualizar a senha", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })


}
function verificacaoCodigo(req, res) {
    var codigo = req.body.verificarServer
    var email = req.body.emailServer;

    usuarioModel.verificacaoCodigo(email, codigo).then((resultado) => {


        if( resultado.length > 0){

         res.status(200).json(resultado);    

        } else{
            res.status(404).json({ erro: "Código Inválido" });

        }

       
    })
        .catch((erro) => {
            console.log(erro);
            console.log("Houve um erro ao verificar código: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })

}

function salvarCodigo(req, res) {
    var codigo = parseInt(100000 + Math.random() * 100000);
    var email = req.body.emailServer;
    usuarioModel.salvarCodigo(email, codigo).then((resultado) => {


        if (resultado.changedRows == 0) {


            res.status(404).json({ erro: "Usuário não encontrado" });

        } else {

            const formData = require('form-data');
            const Mailgun = require('mailgun.js');
            const mailgun = new Mailgun(formData);
            const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || 'c4544799b9ef2a3d60fc523305872137-181449aa-8b230eec' });

            mg.messages.create('sandboxea8ad1cb90ce4f2dab9f3b084922242a.mailgun.org', {
                from: "Airplane Solutions <mailgun@sandboxea8ad1cb90ce4f2dab9f3b084922242a.mailgun.org>",
                to: [email],
                subject: "Recuperação de Senha",
                text: `Seu código de verificação é ${codigo}`,
                html: `<h1>Seu código de verificação é ${codigo}</h1>`
            }).then(msg => console.log(msg)) // logs response data
                .catch(err => console.log(err)); // logs any error

            res.status(200).json(resultado);
        }

    })
        .catch((erro) => {
            console.log(erro);
            console.log("Houve um erro ao enviar o codigo: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
}

async function getUsersByCompany(req, res) {
    const fkCompanhia = req.params.fkCompanhia;

    try {
        const modelResult = await usuarioModel.getUsersByCompany(fkCompanhia)
        res.status(200).json(modelResult)
    } catch (err) {
        console.error(err);
        console.log("Erro ao executar a requisição: ", err.sqlMessage);
        res.status(500).json(err.sqlMessage);
    }
}

async function cadastrarUsuario(req, res) {
    try {
     const fkCompanhia = req.params.fkCompanhia;
     const { nome, senha, email, cargo } = req.body;
 
     const infosUser = { 
         nome,
         senha,
         email,
         cargo
     }
 
     const result = await usuarioModel.cadastrarUsuario(fkCompanhia, infosUser)
     res.status(201).json(result);
    } catch (err) {
     console.error(err);
     console.log("Erro ao tentar cadastrar usuario! \n\n Erro:", err.sqlMessage);
     res.status(500).json(err.sqlMessage);
    }
 }

module.exports = {
    buscarUsuario,
    entrar,
    salvarCodigo,
    verificacaoCodigo,
    updateSenha,
    getUsersByCompany,
    cadastrarUsuario
}