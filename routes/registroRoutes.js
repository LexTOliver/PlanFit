var express = require('express');
const registroController = require('../controllers/registoController.js');

var router = express.Router();

router.get('/', registroController.show); // Lista registros
router.get('/buscaid/:id', registroController.index); // Lista registro, filtrando por id
router.get('/buscanome/:nome', registroController.indexNome); // Lista registro, filtrando por nome
router.post('/', registroController.store); // Adiciona registro
router.put('/:id', registroController.update); // Altera registro
router.delete('/:id', registroController.destroy); // Exclui registro

module.exports = router;