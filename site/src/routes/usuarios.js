var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");


router.get("/buscarUsuario/:idUsuario", function (req, res) {
    usuarioController.buscarUsuario(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/TrocarSenha", function (req, res) {
    usuarioController.salvarCodigo(req, res);
});

router.post("/verificacao", function (req, res) {
    usuarioController.verificacaoCodigo(req, res);
});

module.exports = router;