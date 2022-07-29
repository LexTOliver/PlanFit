var express = require('express');
const alunoController = require('../controllers/alunoController');

var router = express.Router();

router.get('/', alunoController.show); // Lista alunos  
router.get('/buscaid/:id', alunoController.index); // Lista um aluno, filtrando por id V
router.get('/buscanome/:nome', alunoController.indexNome); // Lista um aluno, filtrando por nome V
router.get('/buscaemail/:email', alunoController.indexEmail); // Lista um instrutor, filtrando por email V
router.get('/buscauser/:username', alunoController.indexUser); // Lista um aluno, filtrando por nome de usuário V
router.post('/', alunoController.store); // Adiciona aluno V
router.put('/:id', alunoController.update); // Altera aluno V
router.delete('/:id', alunoController.destroy); // Exclui aluno V

module.exports = router;