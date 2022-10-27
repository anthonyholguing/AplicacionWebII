const cors = require("cors");
const express  = require("express");

const app =  express();
const puerto =  3000;


app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

let Paciente = [];


app.get('/', (req,res)=>{
    res.status(200).send(
        Paciente
    )
})
app.get('/:id', (req,res)=>{
    const {id} =  req.params;
    
    let resultado = Paciente.filter(p => p.id === id);
    if (resultado.length>0)
    {
        res.status(200).send(resultado[0]);
    }
    res.status(404).send({
        message:"No se encontro el elemento a buscar"
    });
})
app.post('/', (req,res)=>{
    const {body} = req;

    Paciente.push(body);
    res.status(200).send({
        message:"Se inserto correctamente",
        body
    })
})
app.put('/', (req,res)=>{
    const {id, identificaion, nombre, edad, condicion} = req.body;
    
    let Pacient =  Paciente.filter(p=> p.id === id)
    if (Paciente.length>0)
    {
         Pacient= Paciente[0]
         Pacient.identificaion= identificaion;
         Pacient.nombre= nombre;
         Pacient.edad= edad;
         Pacient.condicion= condicion;
    }
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response: Pacient
        }
    )
})
app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    Paciente = Paciente.filter(p => p.id !== id);
    res.status(200).send({
        response:"Eliminacion exitosa"
    })
})
app.listen(puerto, ()=>{
    console.log(`Servidor corriendo, http://localhost:${puerto}`)
})