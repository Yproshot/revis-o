const mongoose = require('mongoose')

async function main(){

    try{

        
        await mongoose.connect(`mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PWD}@cluster0.6dhkhc7.mongodb.net/`)
        console.log('Conectado ao MongoDB!')
    } catch(error){
        console.log('Erro ao se conectar: ' + error);
    }
}



module.exports = main