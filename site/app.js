// process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./Web/public")));
app.use("/assets", express.static(path.join(__dirname, "./Web/assets")));

app.use(cors());

app.use("/", indexRouter);

app.listen(PORTA, function () {
    console.log(`O servidor do site está rodando na porta: http://localhost:${PORTA}`);
});
