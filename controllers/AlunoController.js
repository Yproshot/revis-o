const { json } = require("express");
const Aluno = require("../models/aluno")

const AlunoController = {
    getAll: async (req, res) => {
        res.json(await Aluno.find())
    },
    get: async (req, res) => {
        try {
            res.json(await Aluno.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    create: async (req, res) => {
        try {

            let soma = 0
            const notas = req.body.notas
            const alunos = req.body
            
            for(let n of notas){
                soma += n
            }

            const media = soma / notas.length
            alunos.media = media

            res.json(await Aluno.create(alunos))
        } catch (error) {
            res.status(400).json(error.message)
        }
    },

    update: async (req, res) => {
        try {
            res.json(await Aluno.updateMany({turma: "E"}, {turma: "D"}))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async (req, res) => {
        try {
            res.json(await Aluno.deleteMany({nome:"teste"}))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },

    reprovado: async (req, res) => {
        try{
        res.json(await Aluno.find({media: { $lt: 5 }}))
    }catch(error){
        res.status(404).json({error: 'Registro não encontrado'})
    }},

    recuperacao: async (req, res) => {
        try{
        res.json(await Aluno.find({media: {$gte: 5, $lte: 6}}))
    }catch(error){
        res.status(404).json({error: 'Registro não encontrado'})
    }},

    aprovado: async (req, res) => {
        try{
        res.json(await Aluno.find({media: {$gte: 7}}))
    }catch(error){
        res.status(404).json({error: 'Registro não encontrado'})
    }},

}

module.exports = AlunoController