

const cors = require("cors");
const express  = require("express");
const { dbConnection } = require("./database/config");
const ControlRealizado = require("./models/controlrealizado");

const app =  express();
const PUERTO =  2500;

const db = async ()=>{
    await dbConnection();

}
db();
app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/', async (req,res)=>{

    const control = await ControlRealizado.find()
    
    res.status(200).send(
        control
    )
})

app.post ('/', async (req,res)=>{
    const { fecha, hora, valor } = req.body;
    const control = new ControlRealizado({ fecha, hora, valor })
    await control.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        control
    })
})
app.put('/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const control = await ControlRealizado.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            control
        }
    )

})
app.delete('/:identification', async (req,res)=>{
    const {id} =  req.params;
    const control = await ControlRealizado.deleteOne(id)
    res.status(200).send({
        response:"Se eliminó el estudiante con éxito!"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})