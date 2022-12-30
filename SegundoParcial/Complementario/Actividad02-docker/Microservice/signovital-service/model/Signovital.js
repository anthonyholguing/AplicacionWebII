const { Schema, model } = require("mongoose");




const SignoVitalSchema = Schema({
  
    Descripcion: {
        type: String,
        required:[true, 'El campo Descripcion es obligatorio']
    },

    NivelMinimo: {
        type: String,
        required:[ true, 'El campo NivelMinimo es obligatorio' ]
    },
    NivelMaximo: {
        type: String,
        required:[ true, 'El campo NivelMaximo es obligatorio' ]
    },
    
    Condicion: {
        type: String,
        required:[ true, 'El campo Condicion es obligatorio' ]
    }
})


module.exports= model('SignoVital', SignoVitalSchema)