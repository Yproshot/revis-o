const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
    turma: {
      type: String,
      enum: ['A', 'B', 'C', 'D', 'E'], // Apenas estas turmas são permitidas
    },
    notas: [{
      type: Number,
      min:[0, 'Não pode haver nota menor que 0'],
      max:[10, 'Não pode haver nota maior que 10']
    }],
    media: Number
  });



const Aluno = mongoose.model('Aluno', Schema)

module.exports = Aluno