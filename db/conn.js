const mongoose = require('mongoose')

async function main(){

    try{

        
        await mongoose.connect(`mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PWD}@revisao.sn97mla.mongodb.net/?retryWrites=true&w=majority&appName=revisao`)
        console.log('Conectado ao MongoDB!')
    } catch(error){
        console.log('Erro ao se conectar: ' + error);
    }
}



module.exports = main