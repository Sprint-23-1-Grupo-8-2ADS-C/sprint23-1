var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");


router.get("/buscarUsuario/:idUsuario", function (req, res) {
    usuarioController.buscarUsuario(req, res);
});

router.get('/usersByCompany/:fkCompanhia', (req, res) => {
    usuarioController.getUsersByCompany(req,res)
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/TrocarSenha", function (req, res) {
    usuarioController.salvarCodigo(req, res);
});

router.post("/verificacao", function (req, res) {
    usuarioController.verificacaoCodigo(req, res);
});

router.post("/updateSenha", function (req, res) {
    usuarioController.updateSenha(req, res);
});

router.post("/cadastrarUsuario/:fkCompanhia", (req, res) => {
    usuarioController.cadastrarUsuario(req, res);
})

router.put("/atualizarInfosUsuario/:fkCompanhia", (req, res) => {
    usuarioController.atualizarInfosUsuario(req, res);
})

module.exports = router;