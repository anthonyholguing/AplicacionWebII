const { response } = require('express');
const  ControlRealizado  = require('../models/controlRealizado');
const ModelEspejo = require('../models/modelEspejo')


const metodoControlRealizado = async (req, res = response) => {
    const controlRealizado = new ControlRealizado({ fecha: '15/11/2022', hora: '20:58', valor: '50', replicacion: false })
    const guardarControl = await controlRealizado.save();
}

const controlReplica = async (req = request, res = response) => {
    const control = await ControlRealizado.find()
    for (let i = 0; i < control.length; i++) {
        if (control[i].replicacion === false) {
            const datosControl = new ModelEspejo({
                fecha: control[i].fecha, hora: control[i].hora, valor: control[i].valor, replicacion: control[i].replicacion
            })
            await datosControl.save();
        }
    }
}

module.exports = {
    metodoControlRealizado,
    controlReplica
}