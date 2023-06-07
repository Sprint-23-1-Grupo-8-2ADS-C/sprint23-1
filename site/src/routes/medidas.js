var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get('/ultimoUsoCpu/:idCompanhia', (req, res) => {
  medidaController.buscarUltimoUsoCpu(req, res);
})

router.get('/usoDisco/:idCompanhia', (req, res) => {
  medidaController.buscarUsoDisco(req, res);
})

router.get('/usoCpuPorHora/:idTotem/:idCompanhia', (req, res) => {
  medidaController.buscarUsoCpuPorHora(req, res);
})

router.get('/usoRamAtual/:idTotem/:idCompanhia', (req, res) => {
  medidaController.buscarUsoRamAtual(req, res);
})

router.get('/usoDiscoAtual/:idTotem/:idCompanhia', (req, res) => {
  medidaController.buscarUsoDiscoAtual(req, res);
})

router.get('/usoCpuAtual/:idTotem/:idCompanhia', (req, res) => {
  medidaController.buscarUsoCpuAtual(req, res);
})

router.get('/usoRedeAtual/:idTotem/:idCompanhia', (req, res) => {
  medidaController.buscarUsoRedeAtual(req, res);
})

module.exports = router;