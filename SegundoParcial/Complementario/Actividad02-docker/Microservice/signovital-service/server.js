const cors = require("cors");
const express  = require("express");
const  { db_config } = require('./model/config')
const SignoVital= require('./model/Signovital')

const app =  express();
const PUERTO =  4000;

const database = async ()=>{
    await db_config();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/api/v2/signovital', async (req,res)=>{

    const datos = await SignoVital.find()
    
    res.status(200).send(
        datos
    )
})

app.post ('/api/v2/signovital', async (req,res)=>{
    const { Descripcion, NivelMinimo, NivelMaximo, Condicion } = req.body;
    const signo = new SignoVital({ Descripcion, NivelMinimo, NivelMaximo, Condicion })
    await signo.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        signo
    })
})

app.put('/api/v2/signovital/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const signo = await SignoVital.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            signo
        }
    )

})
app.delete('/api/v2/signovital/:id', async (req,res)=>{
    const {id} =  req.params;
    const signo = await SignoVital.deleteOne()
    res.status(200).send({
        response:"Se eliminó el estudiante con éxito!"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})