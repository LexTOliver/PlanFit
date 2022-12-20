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
    listaExercicio: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercicio',
      }],
      required: true,
      validate: [(value) => value.length > 0, 'Lista deve ter ao menos um exercício']
    },
    descricao: {
      type: String,
      required: [true, 'Descrição do plano deve ser detalhada'],
    }
  }
);

module.exports = mongoose.model('PlanoExercicio', PlanoSchema);