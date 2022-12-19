const mongoose = require('mongoose');

const EquipamentoSchema = new mongoose.Schema(
  {
    //id: Number, // Desnecessário, pois o Mongoose gera id automaticamente
    nome: {
      type: String,
      required: [true, 'Nome do equipamento não especificado.'],
      maxLength: [30, 'Nome "{VALUE}" excedeu o limite de 30 caracteres.']
    },
    descricao: {
      type: String,
    },
    image: {
      type: Buffer
    }
  }
);

module.exports = mongoose.model('Equipamento', EquipamentoSchema);