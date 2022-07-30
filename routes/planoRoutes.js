var express = require('express');
const planoController = require('../controllers/planoController.js');

var router = express.Router();

router.get('/', planoController.show); // Lista planos
router.get('/buscaid/:id', planoController.index); // Lista plano, filtrando por id
router.get('/buscanome/:nome', planoController.indexNome); // Lista plano, filtrando por nome
router.post('/', planoController.store); // Adiciona plano
router.put('/:id', planoController.update); // Altera plano
router.delete('/:id', planoController.destroy); // Exclui plano

module.exports = router;