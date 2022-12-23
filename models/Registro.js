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
      required: [true, 'Aluno para registro deve ser especificado'],
    },
    plano: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PlanoExercicio',
      required: [true, 'Plano para registro deve ser especificado'],
    }
  }
)

module.exports = mongoose.model('Registro', RegistroSchema);
