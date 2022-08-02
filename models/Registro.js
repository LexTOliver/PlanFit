const mongoose = require('mongoose')

const RegistroSchema = new mongoose.Schema(
  {
    data: {
      type: Date,
      required: true,
    },
    aluno: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aluno',
    }
  }
)
