const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController')

router.get('/', function (req, res) {
    res.json({})
})


router.get('/Aluno', (req, res) => AlunoController.getAll(req, res))

router.post('/Aluno', (req, res) => AlunoController.create(req, res))

router.get('/Aluno/aprovado', (req, res) => AlunoController.aprovado(req, res))

router.get('/Aluno/reprovado', (req, res) => AlunoController.reprovado(req, res))

router.get('/Aluno/recuperacao', (req, res) => AlunoController.recuperacao(req, res))

router.delete('/Aluno', (req, res) => AlunoController.delete(req, res))

router.put('/Aluno', (req, res) => AlunoController.update(req, res))


module.exports = router 