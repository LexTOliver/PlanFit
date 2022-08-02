const Registro = require('../models/Registro.js');

module.exports = {
  // Lista registro de atividades
  async show(req, res){
    let registros = await Registro.find()
    .populate('aluno', 'nome -_id')
    .populate('data');

    return res.json(registros);
  },

  // Lista por id
  async index(req,res)
  {
    let registros = await Registro.findById(req.params.id)
    .populate('aluno', 'nome -_id')
    .populate('data');

    return res.json(registros);
  },

  // Lista pelo nome
  async indexNome(req,res)
  {
    let registros_por_nome = await Registro.find({ aluno: {nome: req.params.nome}})
    .populate('aluno', 'nome -_id')
    .populate('data');

    return res.json(registros_por_nome);
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