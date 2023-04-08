var database = require("../database/config")

function buscarTotens(fk){
    var instrucao = `
        SELECT * FROM totem 
        WHERE fkCompanhia = ${fk}
    `
    return database.executar(instrucao);
}



module.exports = {
    buscarTotens
}