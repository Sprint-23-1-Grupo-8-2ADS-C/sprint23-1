var express = require("express");
var router = express.Router();

var totemController = require("../controllers/totemController");


router.get("/buscarTotens/:fkCompanhia", function (req, res) {
    totemController.buscarTotens(req, res);
});

module.exports = router;