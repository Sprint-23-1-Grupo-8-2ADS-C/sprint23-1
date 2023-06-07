var medidaModel = require("../models/medidaModel");

async function buscarUltimoUsoCpu(req, res) {
  const idCompanhia = req.params.idCompanhia;

  await medidaModel
    .buscarUltimoUsoCpu(idCompanhia)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch((err) => {
      console.log(err);
      console.log("Erro ao buscar o uso de CPU dos totens");
      res.status(500).json(err.sqlMessage);
    });
}

async function buscarUsoDisco(req, res) {
  const idCompanhia = req.params.idCompanhia;

  await medidaModel
    .buscarUsoDisco(idCompanhia)
    .then((resultado) => {
      if (resultado.length > 0) {
        console.log(resultado);
        
        resultado.forEach(registro => {
          let valorTotalEmGB = (registro.total / (1024 * 1024 * 1024))
          let valorEmUso = registro.valorUsoDisco;

          const porcentagemEmUso = Math.trunc((valorEmUso / valorTotalEmGB) * 100)
          registro.valorUsoDisco = porcentagemEmUso
        });
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch((err) => {
      console.log(err);
      console.log("Erro ao buscar o uso de Disco dos totens");
      res.status(500).json(err.sqlMessage);
    });
}

async function buscarUsoCpuPorHora(req, res) {
  const { idCompanhia, idTotem } = req.params;

  await medidaModel
    .buscarUsoCpuPorHora(idCompanhia, idTotem)
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch((err) => {
      console.error("Erro ao buscar os dados de CPU", err);
      res.status(500).json(err.sqlMessage);
    });
}

async function buscarUsoRamAtual(req, res) {
  const { idCompanhia, idTotem } = req.params;

  await medidaModel
    .buscarUsoRamAtual(idCompanhia, idTotem)
    .then((result) => {
      if (result.length > 0) {
        let valorEmUso = (result[0].valorEmUso / (1024 * 1024 * 1024)).toFixed(0);
        result[0].valorEmUso = valorEmUso;
        
        res.status(200).json(result);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch((err) => {
      console.error("Erro ao buscar os dados atuais de memoria RAM", err);
      res.status(500).json(err.sqlMessage);
    });
}

async function buscarUsoDiscoAtual(req, res) {
  const { idCompanhia, idTotem } = req.params;

  await medidaModel
    .buscarUsoDiscoAtual(idCompanhia, idTotem)
    .then((result) => {
      if (result.length > 0) {
        let valorTotalEmGB = (result[0].valorTotal / (1024 * 1024 * 1024))
        let valorEmUso = result[0].valorEmUso;

        const porcentagemEmUso = Math.trunc((valorEmUso / valorTotalEmGB) * 100)

        result[0].valorEmUso = porcentagemEmUso
        res.status(200).json(result)
      } else {
        res.status(204).send("Nenhum resultado encontrado!")
      }
    }).catch((err) => {
      console.error("Erro ao buscar os dados atuais do Disco", err);
      res.status(500).json(err.sqlMessage)
    })
}

async function buscarUsoCpuAtual(req, res) {
  const { idCompanhia, idTotem } = req.params;

  await medidaModel.buscarUsoCpuAtual(idCompanhia, idTotem).then((result) => {
    if (result.length > 0) {
      res.status(200).json(result)
    } else {
      res.status(204).send("Nenhum resultado encontrado!")
    }
  }).catch((err) => {
    console.error("Erro ao buscar os dados atuais da CPU", err);
    res.status(500).json(err.sqlMessage)
  })
}

async function buscarUsoRedeAtual(req, res) {
  const { idCompanhia, idTotem } = req.params;

  await medidaModel
    .buscarUsoRedeAtual(idCompanhia, idTotem)
    .then((result) => {
      if (result.length > 0) {
        let bytesRecebidos = (result[0].bytesRecebidos)
        let bytesEnviados = (result[0].bytesEnviados)

        const porcentagemEmUso = Math.trunc((bytesRecebidos / bytesEnviados) * 100)

        console.log("Teste uso de Rede \n\n" + 
          `O que veio do banco: ${result[0].bytesRecebidos} \n ${result[0].bytesEnviados} \n\n` +
          `O que eu formatei agora: ${bytesRecebidos} \n ${bytesEnviados} \n\n` +
          `Porcentagem de uso: ${porcentagemEmUso}`);

        // result[0].valorEmUso = porcentagemEmUso
        res.status(200).json(result)
      } else {
        res.status(204).send("Nenhum resultado encontrado!")
      }
    }).catch((err) => {
      console.error("Erro ao buscar os dados atuais do Disco", err);
      res.status(500).json(err.sqlMessage)
    })
}

module.exports = {
  buscarUltimoUsoCpu,
  buscarUsoDisco,
  buscarUsoCpuPorHora,
  buscarUsoRamAtual,
  buscarUsoDiscoAtual,
  buscarUsoCpuAtual,
  buscarUsoRedeAtual
};
