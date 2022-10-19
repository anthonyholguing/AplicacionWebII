const path = require('path');

const express = require('express');
const cors = require('cors');


const puerto = 8626;


//Estructuración de las rutas

const urlInicio = path.join(__dirname,"./Inicio.html")
const urlPaciente = path.join(__dirname,"./Paciente.html")
const urlSignoVital = path.join(__dirname,"./SignoVital.html")
const urlControlRealizado = path.join(__dirname,"./ControlRealizado.html")
const urlError = path.join(__dirname, "./Error.html")

//Crear instancia del servidor
const app  = express();

app.use(cors()).use(express.json())


//Creacion de las rutas que mostraran los html
app.get('/', (req,res)=>{
    res.status(200).sendFile(urlInicio);
})
app.get('/paciente', (req,res)=>{
    res.status(200).sendFile(urlPaciente);
})
app.get('/signoVital', (req,res)=>{
    res.status(200).sendFile(urlSignoVital);
})
app.get('/controlRealizado', (req,res)=>{
    res.status(200).sendFile(urlControlRealizado);
})
app.use((req,res, next)=>{
    res.status(400).sendFile(urlError);
})



//Ejercucion en el Puerto 8626 
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
    
})