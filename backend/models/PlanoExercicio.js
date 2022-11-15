const mongoose = require('mongoose');

const PlanoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, 'Nome do plano não especificado']
    },
    instrutor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instrutor'
    },
    lista_exercicio: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercicio',
      }]
    },
    descricao: {
      type: String,
      required: [true, 'Descrição do plano deve ser detalhada'],
    }
  }
);

module.exports = mongoose.model('PlanoExercicio', PlanoSchema);