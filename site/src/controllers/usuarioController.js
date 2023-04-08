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




module.exports = {
    buscarUsuario
}