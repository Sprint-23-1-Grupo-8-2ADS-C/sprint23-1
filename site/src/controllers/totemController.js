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
  const idTotem = req.params.idTotem;
  const fkCompanhia = req.params.fkCompanhia;
  
  totemModel
    .buscaIndividual(idTotem, fkCompanhia)
    .then((result) => {
      const cpu = result[0].processador
      const cpuFormatado = cpu.replace(/(\d+th Gen\s|\(R\)|\(TM\)|\sCPU|\s@|\s\d\.\d{2}GHz)/gm, "").trim();

      const totalDisco = (result[1].total / (1024 * 1024 * 1024)).toFixed(2)
      result[1].total = totalDisco

      const totalRam = (result[0].total / (1024 * 1024 * 1024)).toFixed(0)
      result[0].total = totalRam

      result.forEach(componente => {
        componente.processador = cpuFormatado
      });
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error("Não foi possível completar a requisição", err);
      res.status(500).json(err.sqlMessage);
    });
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

async function cadastrarTotem(req, res) {
  try {
    const { fkCompanhia } = req.params;
    const {
      sistemaOperacional, fabricante, arquitetura, processador, localizacao,
      totalDisco, totalRam, boolCaptura
    } = req.body;

    const infosTotem = {
      sistemaOperacional, fabricante, arquitetura, processador,
      localizacao, totalDisco, totalRam, boolCaptura
    };

    const result = await totemModel.cadastrarTotem(fkCompanhia, infosTotem);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    console.log("Erro ao tentar cadastrar totem! \n\n Erro:", err.sqlMessage);
    res.status(500).json(err.sqlMessage);
  }
}

module.exports = {
  buscarTotens,
  buscaIndividual,
  countTotens,
  cadastrarTotem
};
