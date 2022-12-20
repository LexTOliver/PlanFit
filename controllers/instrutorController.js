// const mongoose = require('mongoose');
const Instrutor = require('../models/Instrutor.js');

module.exports = {
  // Lista todos os instrutores
  async show(req, res)
  {
    let instrutores = await Instrutor.find();
    return res.json(instrutores);
  },
 
  // Instrutor pelo "id" (único)
  async index(req,res)
  {
    let instrutores = await Instrutor.findById(req.params.id);
    return res.json(instrutores);
  },

  // Instrutor pelo "nome" (único)
  async indexNome(req,res)
  {
    let instrutoresPorNome = await Instrutor.find({ nome: req.params.nome} );
    return res.json(instrutoresPorNome);
  },

  // Instrutor pelo "email"
  async indexEmail(req,res)
  {
    let instrutoresPorEmail = await Instrutor.find({ email: req.params.email} );
    return res.json(instrutoresPorEmail);
  },

  // Instrutor pelo "nome de usuário" (único)
  async indexUser(req,res)
  {
    let instrutoresPorUser = await Instrutor.find({ username: req.params.username} );
    return res.json(instrutoresPorUser);
  },

  // Adiciona instrutor
  async store(req, res)
  {
    const instrutor =  await Instrutor.create(req.body);
    return res.json(instrutor);
  },

  // Altera instrutor
  // Deve-se passar dois dados: o id via param e o json via body
  async update(req,res)
  {
    let instrutor = await Instrutor.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
    return res.json(instrutor);
  },
  
  // Deleta instrutor
  async destroy(req,res)
  {
    let instrutor = await Instrutor.findByIdAndRemove(req.params.id);
    return res.json(instrutor);
  }
};