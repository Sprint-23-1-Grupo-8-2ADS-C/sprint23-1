//  process.env.AMBIENTE_PROCESSO = "desenvolvimento";

// POR FAVOR PARA DE DESMARCAR O PRODUÇÃO :'(
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ?  3333: 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var totemRouter = require("./src/routes/totens");
var medidaRouter = require("./src/routes/medidas")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));
app.use("/assets" ,express.static(path.join(__dirname, "./assets")));


app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/totens", totemRouter);
app.use("/medidas", medidaRouter)


app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n`);
});
