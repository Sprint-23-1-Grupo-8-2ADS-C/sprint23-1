var totemModel = require("../models/totemModel");

function buscarTotens(req, res){
    var fk = req.params.fkCompanhia;

    totemModel.buscarTotens(fk).then((resultado) => {
        res.status(200).json(resultado);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}



module.exports = {
    buscarTotens
}