var express = require("express");
var router = express.Router();

var teste = require("../controllers/testeController");

router.get("/:idUsuario", function (req, res) {
    teste.listarTest(req, res);
});

module.exports = router;