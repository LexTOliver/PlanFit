var express = require('express');
const equipamentoController = require('../controllers/equipamentoController');

var multer = require('multer');
var upload = multer({storage: multer.memoryStorage()});

var router = express.Router();

router.get('/', equipamentoController.show); // Lista equipamentos
router.get('/buscaid/:id', equipamentoController.index); // Lista equipamento, filtrando por id
router.get('/buscanome/:nome', equipamentoController.indexNome); // Lista equipamento, filtrando por nome
router.post('/', upload.single('imagem'), equipamentoController.store); // Adiciona equipamento
router.put('/:id', upload.single('imagem'), equipamentoController.update); // Altera equipamento
router.delete('/:id', equipamentoController.destroy); // Exclui equipamento

module.exports = router;