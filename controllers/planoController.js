const Plano = require('../models/PlanoExercicio.js');

module.exports = {
  // Lista plano de exercícios
  async show(req, res){
    let planos = await Plano.find()
    .populate('Instrutor', 'nome -_id')
    .populate('lista_exercicio', 'nome execucao descricaoVideo');

    return res.json(planos);
  },

  // Lista com filtro "id"zinho
  async index(req,res)
  {
    let planos = await Plano.findById(req.params.id)
    .populate('Instrutor', 'nome -_id')
    .populate('lista_exercicio', 'nome execucao descricaoVideo');

    return res.json(planos);
  },

  // Lista com filtro "nome"
  async indexNome(req,res)
  {
    let planos_por_nome = await Plano.find({ nome: req.params.nome})
    .populate('Instrutor', 'nome -_id')
    .populate('lista_exercicio', 'nome execucao descricaoVideo');

    return res.json(planos_por_nome);
  },

  // Adiciona plano de exercícios
  async store(req, res){
    const plano = await Plano.create(req.body);
    return res.json(plano);
  },

  // Atualiza plano de exercícios
  async update(req, res){
    let plano = await Plano.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
    return res.json(plano);
  },

  // Deleta plano
  async destroy(req,res)
  {
    let plano = await Plano.findByIdAndRemove(req.params.id);
    return res.json(plano);
  }
};