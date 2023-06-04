var database = require("../database/config");

function buscarUsoCPU(fk) {
  let query = `
    SELECT r.idRegistroComponente as idRegistro, 
    r.fkComponente as idComponente, r.fkTotem as idTotem, r.fkCompanhia as idCompanhia, valorUso
    FROM RegistroComponente as r
    INNER JOIN (
        SELECT fkTotem, MAX(dataHoraCaptura) AS ultimaDataHoraCaptura
        FROM RegistroComponente
        WHERE fkCompanhia = ${fk} AND fkComponente = 3
        GROUP BY fkTotem
    ) ultimosRegistros ON r.fkTotem = ultimosRegistros.fkTotem 
    AND r.dataHoraCaptura = ultimosRegistros.ultimaDataHoraCaptura 
    ORDER BY idRegistroComponente DESC;
  `
  return database.executar(query);
}

function buscarUsoDisco(fk) {
  let query = `
    SELECT r.idRegistroComponente as idRegistro, 
    r.fkComponente as idComponente, r.fkTotem as idTotem, r.fkCompanhia as idCompanhia, valorUso
    FROM RegistroComponente as r
    INNER JOIN (
        SELECT fkTotem, MAX(dataHoraCaptura) AS ultimaDataHoraCaptura
        FROM RegistroComponente
        WHERE fkCompanhia = ${fk} AND fkComponente = 2
        GROUP BY fkTotem
    ) ultimosRegistros ON r.fkTotem = ultimosRegistros.fkTotem 
    AND r.dataHoraCaptura = ultimosRegistros.ultimaDataHoraCaptura 
    ORDER BY idRegistroComponente DESC;
  `;
  return database.executar(query);
}

module.exports = {
  buscarUsoCPU,
  buscarUsoDisco
}
