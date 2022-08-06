var express = require('express');
const registroController = require('../controllers/registroController.js');

var router = express.Router();

router.get('/', registroController.show); // Lista registros
router.get('/buscaid/:id', registroController.index); // Lista registro, filtrando por id
router.get('/buscaaluno/:id', registroController.indexAluno); // Lista registro, filtrando por aluno
router.post('/', registroController.store); // Adiciona registro
router.put('/:id', registroController.update); // Altera registro
router.delete('/:id', registroController.destroy); // Exclui registro

module.exports = router;