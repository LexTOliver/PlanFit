// const mongoose = require('mongoose');
const Exercicio = require('../models/Exercicio.js');

module.exports = {
  // Lista todos exercicios
  async show(req, res)
  {
    let exercicios = await Exercicio.find();
    return res.json(exercicios);
  },
 
  // Lista com filtro "id"zinho
  async index(req,res)
  {
    let exercicios = await Exercicio.findById(req.params.id);
    return res.json(exercicios);
  },

  // Lista com filtro "nome"
  async indexNome(req,res)
  {
    let exercicios_por_nome = await Exercicio.find({ nome: req.params.nome} );
    return res.json(exercicios_por_nome);
  },

  // Lista com filtro "equipamento"
  async indexEquipamento(req,res)
  {
    let exercicios_por_equipamento = await Exercicio.find({ equipamento: req.params.equipamento} );
    return res.json(exercicios_por_equipamento);
  },
  
  // Lista com filtro "grupo muscular"
  async indexGrupoMuscular(req,res)
  {
    let exercicios_por_grupo = await Exercicio.find({ grupoMuscular: req.params.grupo} );
    return res.json(exercicios_por_grupo);
  },

  // Adiciona exercício
  async store(req, res)
  {
    const exercicio =  await Exercicio.create(req.body);
    return res.json(exercicio);
  },

  // Altera usuario
  // Deve-se passar dois dados: o id via param e o json via body
  async update(req,res)
  {
    let exercicio = await Exercicio.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
    return res.json(exercicio);
  },
  
  // Deleta usuario
  async destroy(req,res)
  {
    let exercicio = await Exercicio.findByIdAndRemove(req.params.id);
    return res.json(exercicio);
  }
};