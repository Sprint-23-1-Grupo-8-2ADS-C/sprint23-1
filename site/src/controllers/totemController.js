const totemModel = require("../models/totemModel");

function buscarTotens(req, res) {
  const fk = req.params.fkCompanhia;

  totemModel
    .buscarTotens(fk)
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch((erro) => {
      console.log(erro);
      console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscaIndividual(req, res) {
  totemModel.buscaIndividual()
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.error("Não foi possível completar a requisição", err);
      res.status(500).json(err.sqlMessage);
    })
}

function countTotens(req, res) {
  const fk = req.params.fkCompanhia;

  totemModel
    .countTotens(fk)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error("Não foi possível completar a requisição", err);
      res.status(500).json(err.sqlMessage);
    });
}

module.exports = {
  buscarTotens,
  buscaIndividual,
  countTotens
};
