var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");


router.get("/buscarUsuario/:idUsuario", function (req, res) {
    usuarioController.buscarUsuario(req, res);
});
module.exports = router;