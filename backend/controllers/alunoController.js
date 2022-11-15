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
    let alunos_por_nome = await Aluno.find({ nome: req.params.nome} )
    .populate('instrutor', 'nome -_id');
    return res.json(alunos_por_nome);
  },

  // Aluno pelo "email"
  async indexEmail(req,res)
  {
    let alunos_por_email = await Aluno.find({ email: req.params.email} )
    .populate('instrutor', 'nome -_id');;
    return res.json(alunos_por_email);
  },

  // Aluno pelo "nome de usuário" (único)
  async indexUser(req,res)
  {
    let alunos_por_user = await Aluno.find({ username: req.params.username} )
    .populate('instrutor', 'nome -_id');
    return res.json(alunos_por_user);
  },

  // Lista alunos pelo ID de um instrutor
  async indexInstrutor(req,res)
  {
    let alunos_por_instrutor = await Aluno.find( { instrutor: req.params.instrutorId })
    .populate('instrutor', 'nome -_id');
    return res.json(alunos_por_instrutor);
  },

  // Adiciona Aluno
  async store(req, res)
  {
    const aluno =  await Aluno.create(req.body);
    return res.json(aluno);
  },

  // Altera aluno
  async update(req,res)
  {
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