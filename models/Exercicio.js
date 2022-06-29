const mongoose = require('mongoose');
// var gpsMuscular = [];
// var equips = [];

const ExercicioScheme = new mongoose.Schema(
  {
    //id: Number, // Desnecessário, pois o Mongoose gera id automaticamente
    nome: {
      type: String,
      required: [true, 'Nome do exercício não especificado'],
      maxLength: 20
    },
    grupoMuscular: {
      type: [{
        type: String,
        lowercase: true,
        // enum: gpsMuscular
        // TODO: pesquisar e definir enum
      }],
      default: ["não definido"]
    },
    equipamento: {
      type: [{
        type: String,
        lowercase: true
        // TODO: definir schema para equipamentos
      }],
      default: ["sem equipamento"]
    },
    execucao: {
      type: String,
      maxLength: 150
    },
    descricaoVideo: String
  }
);

module.exports = mongoose.model('Exercicio', ExercicioScheme);