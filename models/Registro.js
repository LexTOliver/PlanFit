const mongoose = require('mongoose')

const RegistroSchema = new mongoose.Schema(
  {
    data: {
      type: Date,
      required: true,
    },
    realizado: {
      type: Boolean,
      default: false,
    },
    aluno: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aluno',
      required: true,
    },
    plano: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PlanoExercicio',
      required: true,
    }
  }
)

module.exports = mongoose.model('Registro', RegistroSchema);
