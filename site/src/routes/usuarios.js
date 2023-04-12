var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");


router.get("/buscarUsuario/:idUsuario", function (req, res) {
    usuarioController.buscarUsuario(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;