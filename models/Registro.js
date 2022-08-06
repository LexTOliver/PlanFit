const mongoose = require('mongoose')

const RegistroSchema = new mongoose.Schema(
  {
    data: {
      type: Date,
      required: true,
    },
    realizado: {
      type: Boolean
    },
    aluno: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aluno',
    },
    plano: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PlanoExercicio',
    }
  }
)

module.exports = mongoose.model('Registro', RegistroSchema);