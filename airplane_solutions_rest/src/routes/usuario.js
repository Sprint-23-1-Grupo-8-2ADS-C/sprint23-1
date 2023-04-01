var express = require("express");
var router = express.Router();

var usuario = require("../controllers/usuarioController");

router.get("/listarUsuarios", (req, res)=>{
    usuario.listarUsuarios(req, res);
})

module.exports = router;