// process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

// COLOCANDO UM COMENTÁRIO DE TESTE
var express = require("express");
var cors = require("cors");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3000 : 8000;

var app = express();

var indexRouter = require("./src/routes/index");
app.use("/teste", indexRouter);



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());


app.listen(PORTA, () => {
    console.log(`O servidor da airplane_solutions_rest está rodando na porta: http://localhost:${PORTA}`);
});