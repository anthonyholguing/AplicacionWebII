const  mongoose =  require('mongoose');


const dbConnection = async ()=>{

    try{
        await mongoose.connect( 'mongodb://mongo:27017/database', {useNewUrlParser:true});
        console.log('Base de datos escuchando')
    }
    catch(error){
        console.log(error);
        throw new Error('Error al conectarse con la base de datos')
    }

}
module.exports = {
    dbConnection
}