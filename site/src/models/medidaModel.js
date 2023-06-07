var database = require("../database/config");


function buscarUltimoUsoCpu(idCompanhia) {
  const query = `
    SELECT fkCompanhia, fkComponente, fkTotem, valorUso as valorUsoCpu, dataHoraCaptura
    FROM (
        SELECT fkCompanhia, fkComponente, fkTotem, valorUso, dataHoraCaptura,
              ROW_NUMBER() OVER (PARTITION BY fkTotem ORDER BY idRegistroComponente DESC) AS rn
        FROM RegistroComponente
        WHERE fkComponente = 3 AND fkCompanhia = ${idCompanhia}
    ) AS subquery
    WHERE rn = 1;
  `
  return database.executar(query);
}

function buscarUsoDisco(idCompanhia) {
  const query = `
    SELECT fkCompanhia, fkComponente, fkTotem, valorUso as valorUsoDisco, dataHoraCaptura
    FROM (
        SELECT fkCompanhia, fkComponente, fkTotem, valorUso, dataHoraCaptura,
              ROW_NUMBER() OVER (PARTITION BY fkTotem ORDER BY idRegistroComponente DESC) AS rn
        FROM RegistroComponente
        WHERE fkComponente = 2 AND fkCompanhia = ${idCompanhia}
    ) AS subquery
    WHERE rn = 1;
  `;
  return database.executar(query);
}

function buscarUsoCpuPorHora(idCompanhia, idTotem) {
  const query = `
    SELECT TOP 13 
    dataHoraCaptura, valorUso
    FROM RegistroComponente 
    WHERE fkTotem = ${idTotem} AND fkCompanhia = ${idCompanhia} AND fkComponente = 3
    ORDER BY idRegistroComponente DESC;
  `
  return database.executar(query)
}

function buscarUsoRamAtual(idCompanhia, idTotem) {
  const query = `
    SELECT TOP 1 
    idRegistroComponente as idRegistro,
    fkComponente as idComponente,
    fkCompanhia as idCompanhia,
    fkTotem as idTotem,
    valorUso as valorEmUso
    FROM RegistroComponente
    WHERE fkTotem = ${idTotem} 
    AND fkCompanhia = ${idCompanhia}
    AND fkComponente = 1 
    ORDER BY dataHoraCaptura DESC;
  `
  return database.executar(query);
}

function buscarUsoDiscoAtual(idCompanhia, idTotem) {
  const query = `
    SELECT TOP 1 rc.idRegistroComponente as idRegistro,
    rc.fkComponente as idComponente,
    rc.fkTotem as idTotem,
    rc.fkCompanhia as idCompanhia,
    rc.valorUso as valorEmUso,
    ct.total as valorTotal 
    FROM RegistroComponente as rc
    JOIN componenteTotem as ct ON rc.fkComponente = ct.fkComponente 
    WHERE rc.fkTotem= ${idTotem}
    AND rc.fkCompanhia = ${idCompanhia} 
    AND rc.fkComponente = 2
    ORDER BY dataHoraCaptura DESC;
  `
  return database.executar(query)
}

function buscarUsoCpuAtual(idCompanhia, idTotem) {
  const query = `
    SELECT TOP 1 
    idRegistroComponente as idRegistro,
    fkComponente as idComponente,
    fkCompanhia as idCompanhia,
    fkTotem as idTotem,
    valorUso as valorEmUso
    FROM RegistroComponente
    WHERE fkTotem = ${idTotem} 
    AND fkCompanhia = ${idCompanhia}
    AND fkComponente = 3 
    ORDER BY dataHoraCaptura DESC;
  `
  return database.executar(query)
}

function buscarUsoRedeAtual(idCompanhia, idTotem) {
  const query = `
    SELECT TOP 1 
    idRegistroComponente as idRegistro,
    fkComponente as idComponente,
    fkCompanhia as idCompanhia,
    fkTotem as idTotem,
    bytesRecebidos,
    bytesEnviados
    FROM RegistroComponente
    WHERE fkTotem = ${idTotem} 
    AND fkCompanhia = ${idCompanhia}
    AND fkComponente = 4 
    ORDER BY dataHoraCaptura DESC;
  `
  return database.executar(query)
}

module.exports = {
  buscarUltimoUsoCpu,
  buscarUsoCpuPorHora,
  buscarUsoDisco,
  buscarUsoRamAtual,
  buscarUsoDiscoAtual,
  buscarUsoCpuAtual,
  buscarUsoRedeAtual
}
