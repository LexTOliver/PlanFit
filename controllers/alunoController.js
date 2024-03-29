// const mongoose = require('mongoose');
const Aluno = require('../models/Aluno.js');

module.exports = {
  // Lista todos os alunos
  async show(req, res)
  {
    let alunos = await Aluno.find()
    .populate('instrutor', 'nome -_id');
    return res.json(alunos);
  },
 
  // Aluno pelo "id" (único)
  async index(req,res)
  {
    let alunos = await Aluno.findById(req.params.id)
    .populate('instrutor', 'nome -_id');
    return res.json(alunos);
  },

  // Aluno pelo "nome" (único)
  async indexNome(req,res)
  {
    let alunosPorNome = await Aluno.find({ nome: req.params.nome} )
    .populate('instrutor', 'nome -_id');
    return res.json(alunosPorNome);
  },

  // Aluno pelo "email"
  async indexEmail(req,res)
  {
    let alunosPorEmail = await Aluno.find({ email: req.params.email} )
    .populate('instrutor', 'nome -_id');;
    return res.json(alunosPorEmail);
  },

  // Aluno pelo "nome de usuário" (único)
  async indexUser(req,res)
  {
    let alunosPorUser = await Aluno.find({ username: req.params.username} )
    .populate('instrutor', 'nome -_id');
    return res.json(alunosPorUser);
  },

  // Lista alunos pelo ID de um instrutor
  async indexInstrutor(req,res)
  {
    let alunosPorInstrutor = await Aluno.find( { instrutor: req.params.instrutorId })
    .populate('instrutor', 'nome -_id');
    return res.json(alunosPorInstrutor);
  },

  // Adiciona Aluno
  async store(req, res)
  {
    if (req.file) {
      req.body.imagem = req.file.buffer;
    }
    const aluno =  await Aluno.create(req.body);
    return res.json(aluno);
  },

  // Altera aluno
  async update(req,res)
  {
    if (req.file) {
      req.body.imagem = req.file.buffer;
    }
    let aluno = await Aluno.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
    return res.json(aluno);
  },
  
  // Deleta aluno
  async destroy(req,res)
  {
    let aluno = await Aluno.findByIdAndRemove(req.params.id);
    return res.json(aluno);
  }
};