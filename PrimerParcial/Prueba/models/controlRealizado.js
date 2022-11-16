const { model, Schema } = require('mongoose');

const controlRealizadoSchema = Schema(
    {
        fecha:{
            type: String,
            required: [ true, 'La fecha del control realizado es necesaria'],
        },
        hora:{
            type: String,
            required: [ true, 'La hora del control realizado es necesaria'],
        },
        valor:{
            type: String,
            required: [ true, 'El valor del control realizado es necesario'],
        },
        replicacion:{
            type: Boolean,
            required: [ true, 'La replicación del control realizado es necesario'],
        }
       
    }
);


module.exports = model('ControlRealizado', controlRealizadoSchema );