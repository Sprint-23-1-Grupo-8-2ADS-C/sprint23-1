const { response } = require("express");
var teste = require("../models/testeModel");

function listarTest(req, res){
    var idUsuario = req.params.idUsuario;

    teste.listarUsuarios(idUsuario).then(
        (response) =>{
            var json = 
            {
                payload: response
            };

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

module.exports = {
    listarTest
}