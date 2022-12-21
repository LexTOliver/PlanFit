var express = require('express');
const exercicioController = require('../controllers/exercicioController');

var multer = require('multer');
var upload = multer({storage: multer.memoryStorage()});

var router = express.Router();

router.get('/', exercicioController.show); // Lista exercícios
router.get('/buscaid/:id', exercicioController.index); // Lista exercício, filtrando por id
router.get('/buscanome/:nome', exercicioController.indexNome); // Lista exercício, filtrando por nome
router.get('/buscaequipamento/:equipamento', exercicioController.indexEquipamento); // Lista exercício, filtrando por equipamento
router.get('/buscagrupo/:grupo', exercicioController.indexGrupoMuscular); // Lista exercicio, filtrando por grupo muscular
router.post('/', upload.single('imagem'), exercicioController.store); // Adiciona exercício
router.put('/:id', exercicioController.update); // Altera exercício
router.delete('/:id', exercicioController.destroy); // Exclui exercício

module.exports = router;