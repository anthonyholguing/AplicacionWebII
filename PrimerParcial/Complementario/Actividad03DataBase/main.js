//constante para mongoose
const mongoose = require('mongoose');


//La url de base de datos de MongoDB
const EnlaceMongo = "mongodb+srv://anthonyholguing:anthonyholguing@cluster0.akz4txg.mongodb.net/complementario-Semana-numero3";

async function EnviarDatosMongo() {

    try {
        //conexion MongoDB
        const ConectrDBMongo = await mongoose.connect(EnlaceMongo);  
        
        //Creación de los modelos de datos con mis entidades asignadas
        const Paciente = mongoose.model("Paciente", {
            Identificacion: String,
            Nombre: String,
            Edad: Number,
            Condicion: String
        });
    
        const SignoVital = mongoose.model("SignoVital", {
            Descripcion: String,
            NivelMaximo: Number,
            NivelMinimo: Number,
            Condicion: String,

        })
    
        const ControlRealizado = mongoose.model("ControlRealizado",{
            idPaciente:{type: mongoose.Schema.Types.ObjectId, ref:"Paciente"},
            idSignoVital:{type: mongoose.Schema.Types.ObjectId, ref:"SignoVital"},
            Fecha: String,
            Hora: String,
            Valor: Number
        })
    
        //Ingres de dato a los modelos anteriormente creados
        //Paciente Datos
        const paciente1 = new Paciente({
            Identificacion: "1354789624",
            Nombre: "David Loor",
            Edad: 25,
            Condicion: "Estable"
        })
        const savePaciente = await paciente1.save();
        
        
        // //Signo Vital Datos
        const signoVital1 = new SignoVital({
            Descripcion: "Signos Normales",
            NivelMaximo: 140,
            NivelMinimo: 110,
            Condicion: "Estable"
        })
        const saveSignovital = await signoVital1.save();
        // se utiliza save para guardar


        // //Control Realizado Datos
        const controlRealizado1 = new ControlRealizado({
            idPaciente: savePaciente._id,
            idSignoVital: saveSignovital._id,
            Fecha: "22/09/2022",
            Horal: "09:00",
            Valor: 50
        })
        const saveControlrealizado = await controlRealizado1.save();
        

        // //Mostrar las colecciones por estructuras de iteracion
        const DatosPaciente = await Paciente.find();
        const DatosSignoVital = await SignoVital.find();
        const DatosControlRealizado = await ControlRealizado.find();

        // //Paciente datos
        let iterador =0;
        while(iterador < DatosPaciente.length){
            console.log(DatosPaciente[iterador]);
            iterador++
        };


        //Signo Vital Datos
        for(let iterador2= 0; iterador2<DatosSignoVital.length; iterador2++){
            console.log(DatosSignoVital[iterador2]);
        };


        //Control Realizado Datos
        let iterador3=0;
        do{
            console.log(DatosControlRealizado[iterador3]);
            iterador3++
        }while(iterador3 < DatosControlRealizado.length);
        

        //actualización del atributo Nombre de la Coleccion Paciente
        const UpdatePaciente = await Paciente.updateMany({_id: "634863be3fa790c8624e7ecc", Nombre:"Anthony Holguin"})
        
        //si surge un error
    } catch (error) {
        console.log(error.message);
    }
}

EnviarDatosMongo();


