var express = require("express");
var router = express.Router();

var totemController = require("../controllers/totemController");


router.get("/buscarTotens/:idCompanhia", function (req, res) {
    totemController.buscarTotens(req, res);
});

router.get("/buscaIndividual/:idTotem/:idCompanhia", (req, res) => {
    totemController.buscaIndividual(req, res);
});

router.get("/count/:idCompanhia", (req, res) => {
    totemController.countTotens(req,res);
});

router.get("/countAtivos/:idCompanhia", (req, res) => {
    totemController.countAtivos(req, res);
})

router.get("/countInativos/:idCompanhia", (req, res) => {
    totemController.countInativos(req, res);
})

router.post("/cadastrarTotem/:idCompanhia", (req, res) => {
    totemController.cadastrarTotem(req,res);
})

module.exports = router;