const cors = require("cors");
const express  = require("express");
const  { db_config } = require('./model/config')
const Paciente = require('./model/Paciente')

const app =  express();
const PUERTO =  4000;

const database = async ()=>{
    await db_config();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/api/v2/paciente', async (req,res)=>{

    const datos = await Paciente.find()
    
    res.status(200).send(
        datos
    )
})

app.post ('/api/v2/paciente', async (req,res)=>{
    const { Nombre, Edad, Condicion } = req.body;
    const paciente = new Paciente({ Nombre, Edad, Condicion })
    await paciente.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        paciente
    })
})

app.put('/api/v2/paciente/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const paciente = await Paciente.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            paciente
        }
    )

})
app.delete('/api/v2/paciente/:id', async (req,res)=>{
    const {id} =  req.params;
    const paciente = await Paciente.deleteOne()
    res.status(200).send({
        response:"Se eliminó el estudiante con éxito!"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})