const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

// Rotas
var exercicioRoute = require('./routes/exercicioRoutes.js');
var planoRoute = require('./routes/planoRoutes.js');
var instrutorRoute = require('./routes/instrutorRoutes.js');
var alunoRoute = require('./routes/alunoRoutes.js');
var registroRoute = require('./routes/registroRoutes.js');

// Conectando ao mongoDB
// O próprio Mongo fornece a url abaixo; TODO: configurar DB para  o projeto
mongoose.connect(process.env.dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Iniciando API Express e configurações
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// URL root
app.get('/', (req, res) => {
	res.send('PlanFit API Index! Coloque aqui sua foto do mongoose treinando!');
});

// Rotas para Exercício
app.use('/exercicio', exercicioRoute);
app.use('/plano', planoRoute);
app.use('/instrutor', instrutorRoute);
app.use('/aluno', alunoRoute);
app.use('/registro', registroRoute);

app.listen(3030, () => console.log('PlanFit API started on port 3030!'));
