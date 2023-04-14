var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function buscarUsuario(req, res){
    var id = req.params.idUsuario;
    
    usuarioModel.buscarUsuario(id).then((resultado) =>{
        res.status(200).json(resultado);
    })
    .catch((erro) =>{
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

function salvarCodigo(req, res){
    var codigo = parseInt(100000 + Math.random() * 100000);
     var email = req.body.emailServer;
    usuarioModel.salvarCodigo(email, codigo).then((resultado) =>{
        res.status(200).json(resultado);

        // ENVIAR O EMAIL AQUI USANDO A VAR CODIGO
        console.log(codigo)

    })
    .catch((erro) =>{
        console.log(erro);
        console.log("Houve um erro ao enviar o codigo: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })


}

module.exports = {
    buscarUsuario,
    entrar,
    salvarCodigo
}