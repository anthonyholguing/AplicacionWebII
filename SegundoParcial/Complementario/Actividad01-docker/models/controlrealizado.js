const { Schema, model } = require("mongoose");




const ControlRealizadoSchema = Schema({

    fecha: {
        type: String,
        required:[true, 'El campo fecha es obligatorio']
    },

    hora: {
        type: String,
        required:[ true, 'El campo hora es obligatorio' ]
    },
    

    valor: {
        type: String,
        required:[ true, 'El campo valor es obligatorio' ]
    }
})


module.exports= model('ControlRealizado', ControlRealizadoSchema)