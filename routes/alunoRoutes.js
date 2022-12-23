var express = require('express');
const alunoController = require('../controllers/alunoController');

var multer = require('multer');
var upload = multer({storage: multer.memoryStorage()});

var router = express.Router();

router.get('/', alunoController.show); // Lista alunos  
router.get('/buscaid/:id', alunoController.index); // Lista um aluno, filtrando por id V
router.get('/buscanome/:nome', alunoController.indexNome); // Lista um aluno, filtrando por nome V
router.get('/buscaemail/:email', alunoController.indexEmail); // Lista um instrutor, filtrando por email V
router.get('/buscauser/:username', alunoController.indexUser); // Lista um aluno, filtrando por nome de usuário V
router.get('/buscainstrutor/:instrutorId', alunoController.indexInstrutor); // Lista todos alunos atrelados a um instrutor
router.post('/', upload.single('imagem'), alunoController.store); // Adiciona aluno V
router.put('/:id', upload.single('imagem'), alunoController.update); // Altera aluno V
router.delete('/:id', alunoController.destroy); // Exclui aluno V

module.exports = router;