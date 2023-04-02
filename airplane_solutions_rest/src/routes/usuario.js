var express = require("express");
var router = express.Router();

var usuario = require("../controllers/usuarioController");

// ROTA QUE LISTA AS INFORMAÇÕES DE UM USUÁRIO ESPECÍFICO
router.get("/listarUsuario/:idUsuario", (req, res)=>{
    usuario.listarUsuario(req, res);
})

// ROTA QUE CRIA O LOGIN DO USUÁRIO
router.post("/login", (req, res) =>{
    usuario.login(req, res);
})
module.exports = router;