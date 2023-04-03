process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3000 : 8000;

var app = express();

var usuarioRouter = require("./src/routes/usuario");
var indexRouter = require("./src/routes/index");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/usuario", usuarioRouter);
app.use("/teste", indexRouter);

app.listen(PORTA, () => {
    console.log(`O servidor da AirplaneSolutionsRest está rodando na porta: http://localhost:${PORTA}`);
});