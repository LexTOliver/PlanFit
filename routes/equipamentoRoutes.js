var express = require('express');
const equipamentoController = require('../controllers/equipamentoController');

var router = express.Router();

router.get('/', equipamentoController.show); // Lista equipamentos
router.get('/buscaid/:id', equipamentoController.index); // Lista equipamento, filtrando por id
router.get('/buscanome/:nome', equipamentoController.indexNome); // Lista equipamento, filtrando por nome
router.post('/', equipamentoController.store); // Adiciona equipamento
router.put('/:id', equipamentoController.update); // Altera equipamento
router.delete('/:id', equipamentoController.destroy); // Exclui equipamento

module.exports = router;