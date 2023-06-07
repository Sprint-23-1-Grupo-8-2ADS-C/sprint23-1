var database = require("../database/config")

function buscarTotens(idCompanhia) {
    let instrucao = `
        SELECT * FROM totem 
        WHERE fkCompanhia = ${idCompanhia}
    `
    return database.executar(instrucao);
}

function buscaIndividual(idTotem, fkCompanhia) {
    let instrucao = `
        SELECT ct.fkComponente as id_componente, c.descricao AS componente_descricao, 
        t.idTotem as totem_id, t.fkCompanhia, t.localizacaoTotem, t.processador, t.sistemaOperacional, t.token, ct.total
        FROM componenteTotem ct
        JOIN componente c ON ct.fkComponente = c.idComponente
        JOIN totem t ON ct.fkTotem = t.idTotem AND ct.fkCompanhia = t.fkCompanhia 
        WHERE t.idTotem = ${idTotem} and t.fkCompanhia = ${fkCompanhia};
    `
    return database.executar(instrucao)
}

function countTotens(idCompanhia) {
    let instrucao = `
        SELECT count(idTotem) as quantidadeTotens FROM totem
        WHERE fkCompanhia = ${idCompanhia}
    `
    return database.executar(instrucao)
}

function countAtivos(idCompanhia) {
    let instrucao = `
        SELECT count(idTotem) as quantidadeTotens FROM totem
        WHERE fkCompanhia = ${idCompanhia} AND boolCaptura = 1
    `
    return database.executar(instrucao)
}

function countInativos(idCompanhia) {
    let instrucao = `
        SELECT count(idTotem) as quantidadeTotens FROM totem
        WHERE fkCompanhia = ${idCompanhia} AND boolCaptura = 0
    `
    return database.executar(instrucao)
}

function cadastrarTotem(idCompanhia, infosTotem) {
    let query;
    const idTotemQuery = `(SELECT TOP 1 idTotem + 1 FROM totem WHERE fkCompanhia = ${idCompanhia} ORDER BY idTotem DESC)`;
  
    if (infosTotem.boolCaptura) {
      query = `
        INSERT INTO totem(
            idTotem, fkCompanhia, localizacaoTotem, boolCaptura
        )
        VALUES(
            ${idTotemQuery}, 
            ${idCompanhia}, 
            '${infosTotem.localizacao}',
            1
        );
      `;
    } else {
      query = `
        INSERT INTO totem(
            idTotem, fkCompanhia, fabricante, arquitetura, 
            sistemaOperacional, processador, localizacaoTotem, boolCaptura
        )
        VALUES(
            ${idTotemQuery}, 
            ${idCompanhia},
            '${infosTotem.fabricante}',
            '${infosTotem.arquitetura}',
            '${infosTotem.sistemaOperacional}',
            '${infosTotem.processador}',
            '${infosTotem.localizacao}',
            0
        );
      `;
    }
  
    return database.executar(query);
  }


module.exports = {
    buscarTotens,
    buscaIndividual,
    countTotens,
    countAtivos,
    countInativos,
    cadastrarTotem
}