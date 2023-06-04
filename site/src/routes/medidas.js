var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get('/usoCpu/:fkCompanhia', (req, res) => {
  medidaController.buscarUsoCPU(req, res);
})

router.get('/usoDisco/:fkCompanhia', (req, res) => {
  medidaController.buscarUsoDisco(req, res);
})

module.exports = router;