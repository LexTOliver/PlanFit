// const mongoose = require('mongoose');
const Equipamento = require('../models/Equipamento.js');

module.exports = {
  // Lista todos equipamentos
  async show(req, res)
  {
    let equipamentos = await Equipamento.find();
    return res.json(equipamentos);
  },
 
  // Lista com filtro "id"zinho
  async index(req,res)
  {
    let equipamento = await Equipamento.findById(req.params.id);
    return res.json(equipamento);
  },

  // Lista com filtro "nome"
  async indexNome(req,res)
  {
    let equipamentoPorNome = await Equipamento.find({ nome: req.params.nome} );
    return res.json(equipamentoPorNome);
  },

  // Adiciona equipamento
  async store(req, res)
  {
    if (req.file) {
      req.body.imagem = req.file.buffer;
    }
    const equipamento =  await Equipamento.create(req.body);
    return res.json(equipamento);
  },

  // Altera equipamento
  // Deve-se passar dois dados: o id via param e o json via body
  async update(req,res)
  {
    let equipamento = await Equipamento.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
    return res.json(equipamento);
  },
  
  // Deleta usuario
  async destroy(req,res)
  {
    let equipamento = await Equipamento.findByIdAndRemove(req.params.id);
    return res.json(equipamento);
  }
};