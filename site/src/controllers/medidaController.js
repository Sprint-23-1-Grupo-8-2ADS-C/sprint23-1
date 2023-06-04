var medidaModel = require("../models/medidaModel");

async function buscarUsoCPU(req, res) {
  let fkCompanhia = req.params.fkCompanhia;
  
  console.log(`Buscando o uso de CPU dos totens da companhia ${fkCompanhia}`);

  await medidaModel.buscarUsoCPU(fkCompanhia).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado)
    } else {
      res.status(204).send("Nenhum resultado encontrado!")
    }
  }).catch((err) => {
    console.log(err);
    console.log("Erro ao buscar o uso de CPU dos totens");
    res.status(500).json(err.sqlMessage);
  });
}

async function buscarUsoDisco(req, res) {
  let fkCompanhia = req.params.fkCompanhia;
  
  console.log(`Buscando o uso de Disco dos totens da companhia ${fkCompanhia}`);

  await medidaModel.buscarUsoDisco(fkCompanhia).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado)
    } else {
      res.status(204).send("Nenhum resultado encontrado!")
    }
  }).catch((err) => {
    console.log(err);
    console.log("Erro ao buscar o uso de Disco dos totens");
    res.status(500).json(err.sqlMessage);
  });
}



module.exports = {
  buscarUsoCPU,
  buscarUsoDisco
}