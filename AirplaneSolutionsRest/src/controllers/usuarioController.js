const { response } = require("express");
var usuarioModel = require("../models/usuarioModel");

function listarUsuario(req, res){
    var idUsuario = req.params.idUsuario;

    usuarioModel.listarUsuario(idUsuario)
        .then((response) =>{
            var json = { payload: response };
            res.status(200).json(json);
        }
    )
    .catch(
        function (erro){
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function login(req, res){
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // VALIDANDO SE AS CREDÊNCIAS FORAM PASSADAS DE FORMA CORRETA
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
        return false;

    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
        return false;

    }
    else{
        usuarioModel.login(email, senha)
        .then((response) =>{
            
            if(response.length == 1){
                res.status(200).send("Usuário encontrado com sucesso");
                return true;
            }
            else {
                res.status(403).send("Usuário não encontrado");
            }
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    listarUsuario,
    login
}