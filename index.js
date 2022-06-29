const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const cors = require('cors');

// Rotas
var exercicioRoute = require('./routes/exercicioRoutes.js');

// Conectando ao mongoDB
// O próprio Mongo fornece a url abaixo; TODO: configurar DB para  o projeto
mongoose.connect("mongodb+srv://LexOliver:DWM_Opta22@clustercleiton.h779g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Iniciando API Express e configurações
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// URL root
app.get('/', (req, res) => {
	res.send('PlanFit API Index! Coloque aqui sua foto do mongoose treinando!');
});

// Rotas para Exercício
app.use('/exercicio', exercicioRoute);

app.listen(3000, () => console.log('PlanFit API started on port 3000!'));