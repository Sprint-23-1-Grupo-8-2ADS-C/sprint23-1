var database = require("../database/config")

function buscarTotens(fkCompanhia) {
    let instrucao = `
        SELECT * FROM totem 
        WHERE fkCompanhia = ${fkCompanhia}
    `
    return database.executar(instrucao);
}

function buscaIndividual(idTotem, fkCompanhia) {
    let instrucao = `
        SELECT ct.fkComponente as id_componente, c.descricao AS componente_descricao, 
        t.idTotem as totem_id, t.fkCompanhia, t.localizacaoTotem, t.processador, t.sistemaOperacional, t.token, ct.total
        FROM componenteTotem ct
        JOIN componente c ON ct.fkComponente = c.idComponente
        JOIN totem t ON ct.fkTotem = t.idTotem AND ct.fkCompanhia = t.fkCompanhia WHERE t.idTotem = ${idTotem} and t.fkCompanhia = ${fkCompanhia};
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