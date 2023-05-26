var express = require("express");
var router = express.Router();

var totemController = require("../controllers/totemController");


router.get("/buscarTotens/:fkCompanhia", function (req, res) {
    totemController.buscarTotens(req, res);
});

router.get("/buscaIndividual/:idTotem/:fkCompanhia", (req, res) => {
    totemController.buscaIndividual(req, res)
});

router.get("/count/:fkCompanhia", (req, res) => {
    totemController.countTotens(req,res)
});

router.post("/cadastrarTotem/:fkCompanhia", (req, res) => {
    totemController.cadastrarTotem(req,res)
})

module.exports = router;