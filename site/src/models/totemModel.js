var database = require("../database/config")

function buscarTotens(fkCompanhia) {
    let instrucao = `
        SELECT * FROM totem 
        WHERE fkCompanhia = ${fk}
    `
    return database.executar(instrucao);
}

function buscaIndividual() {
    let instrucao = `
        SELECT ct.fkComponente, c.descricao AS componente_descricao, t.idTotem, t.fkCompanhia, t.localizacaoTotem, t.processador, ct.total
        FROM componenteTotem ct
        JOIN componente c ON ct.fkComponente = c.idComponente
        JOIN totem t ON ct.fkTotem = t.idTotem AND ct.fkCompanhia = t.fkCompanhia;
    `
    return database.executar(instrucao)
}

function countTotens(fk) {
    let instrucao = `
        SELECT count(idTotem) as quantidadeTotens FROM totem
        WHERE fkCompanhia = ${fk}
    `
    return database.executar(instrucao)
}


module.exports = {
    buscarTotens,
    buscaIndividual,
    countTotens
}