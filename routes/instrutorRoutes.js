var express = require('express');
const instrutorController = require('../controllers/instrutorController');

var multer = require('multer');
var upload = multer({storage: multer.memoryStorage()});

var router = express.Router();

router.get('/', instrutorController.show); // Lista instrutores V 
router.get('/buscaid/:id', instrutorController.index); // Lista um instrutor, filtrando por id V
router.get('/buscanome/:nome', instrutorController.indexNome); // Lista um instrutor, filtrando por nome V
router.get('/buscaemail/:email', instrutorController.indexEmail); // Lista um instrutor, filtrando por email V
router.get('/buscauser/:username', instrutorController.indexUser); // Lista um instrutor, filtrando por nome de usuário V
router.post('/', upload.single('imagem'), instrutorController.store); // Adiciona instrutor V
router.put('/:id', instrutorController.update); // Altera instrutor V
router.delete('/:id', instrutorController.destroy); // Exclui instrutor V

module.exports = router;