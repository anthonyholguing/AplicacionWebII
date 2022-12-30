const { Schema, model } = require("mongoose");




const PacienteSchema = Schema({

    Nombre: {
        type: String,
        required:[true, 'El campo Nombre es obligatorio']
    },

    Edad: {
        type: String,
        required:[ true, 'El campo Edad es obligatorio' ]
    },
    Condicion: {
        type: String,
        required:[ true, 'El campo Condicion es obligatorio' ]
    }
})


module.exports= model('Paciente', PacienteSchema)