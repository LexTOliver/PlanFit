const Registro = require('../models/Registro.js');
const mongoose = require('mongoose');

module.exports = {
  // Lista registro de atividades
  async show(req, res){
    let registros = await Registro.find()
    .populate('aluno', 'nome -_id')
    .populate('plano', 'nome -_id')
    .populate('data');

    return res.json(registros);
  },

  // Lista por id
  async index(req,res)
  {
    let registros = await Registro.findById(req.params.id)
    .populate('aluno', 'nome -_id')
    .populate('plano', 'nome -_id')
    .populate('data');

    return res.json(registros);
  },

  // Lista exercícios de um aluno
  async indexAluno(req,res)
  {
    let registrosPorNome = await Registro.find({ aluno: {_id: mongoose.Types.ObjectId(req.params.id)}})
    .populate('aluno', 'nome -_id')
    .populate('plano', 'nome -_id')
    .populate('data');

    return res.json(registrosPorNome);
  },

  // Adiciona registro de atividade
  async store(req, res){
    const registro = await Registro.create(req.body);
    return res.json(registro);
  },

  // Atualiza registro de atividade
  async update(req, res){
    let registro = await Registro.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
    return res.json(registro);
  },

  // Apaga registro
  async destroy(req,res)
  {
    let registro = await Registro.findByIdAndRemove(req.params.id);
    return res.json(registro);
  }
};