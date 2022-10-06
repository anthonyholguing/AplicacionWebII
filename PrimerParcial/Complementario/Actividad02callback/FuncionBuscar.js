//exportamos el arreglo de de datos.js
const { Controlrealizado, paciente  } = require('./datos')

//constante para buscar los elementos de paciente en una funcion flecha
const BuscaElmentepaciente = (id) =>{
   //una constante y el arreglo y se utiliza la funcion para buscar .find y dentro enviamos otra funcion
    const Paciente = paciente.find(function(ArregloPaciente){
       //retornar la id del paciente y una validación
        return ArregloPaciente.id === id
    })
    // se realiza una validacion 
    if( !Paciente ){
        //si no se encuentra se envia el mensaje:
        console.log(`El paciento con id ${ id } no existe`);
    }
    else{
        //imprimir
        console.log(`El paciente ${Paciente.nombre}`);
    }
    
}
//constante para buscar los elementos de paciente en una funcion flecha
const BuscaElmentoControlrealizado = (id) =>{
    const controlrealizado = Controlrealizado.find(function(ArregloControl){
        return ArregloControl.id === id
    })
    if( !controlrealizado ){
        //si no se encuentra se envia el mensaje:
        console.log(`El paciento con id ${ id } no existe`);
    }
    else{
        //imprimir
        console.log(`Se realizo el chequeo de sus signo vitales a las ${ controlrealizado.Hora}`);
    }
    
}
//una variable para la id para buscar
let id= 2;
BuscaElmentepaciente(id)
BuscaElmentoControlrealizado(id);