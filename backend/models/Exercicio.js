const mongoose = require('mongoose');

const gpsMuscular = [
  'Bíceps',
  'Tríceps',
  'Antebraço',
  'Deltóides',
  'Dorsal',
  'Peitoral',
  'Abdômen',
  'Glúteos',
  'Quadríceps',
  'Posterior da coxa',
  'Panturrilha'
];

const ExercicioSchema = new mongoose.Schema(
  {
    //id: Number, // Desnecessário, pois o Mongoose gera id automaticamente
    nome: {
      type: String,
      required: [true, 'Nome do exercício não especificado.'],
      maxLength: [30, 'Nome "{VALUE}" excedeu o limite de 30 caracteres.']
    },
    grupoMuscular: {
      type: [{
        type: String,
        lowercase: true,
        enum: [
          gpsMuscular.forEach(val => val.toLowerCase),
          'Grupo muscular especificado não consta na lista de grupos musculares'
        ]
      }],
      default: ["não definido"]
    },
    equipamento: {
      type: [String],
      default: ["Sem equipamento"]
    },
    execucao: {
      type: String,
      maxLength: [150, 'Descrição da execução excedeu o limite de 150 caracteres.'],
      default: "Sem descrição de execução"
    },
    descricaoVideo: {
      type: String,
      default: "Sem vídeo-exemplo"
    }
  }
);

module.exports = mongoose.model('Exercicio', ExercicioSchema);