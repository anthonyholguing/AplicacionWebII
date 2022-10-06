//se exporta los datos de los arreglos
const { Controlrealizado, paciente  } = require('./datos')

//constante para buscar el paciente y su id y el callback
const BuscaElmentepaciente = (id, callback) =>{
    const Paciente = paciente.find(function(ArregloPaciente){
        return ArregloPaciente.id === id
    })
        //condicón
    if(Paciente){
        callback(null,Paciente )
    }
    else{
        //si existe un error
        callback(error)
    }

}
//constante para buscar Controlrealizado y su id y el callback en una función flecha
const BuscaElmentoControlrealizado = (id, callback) =>{
    const controlrealizado = Controlrealizado.find(function(ArregloControl){
        return ArregloControl.id === id
    })
    //condicion
    if( controlrealizado ){
        callback(null,controlrealizado )
    }
    else{
        //si existe error
        callback(error)
    }
    
}

let id= 5;


//Llamado de las funciones declaradas, y sus id y funciones callbacks
BuscaElmentepaciente(id , (error ,Paciente ) => {
    if(error){
        console.log(error `Error de ${id}`);
    }
    BuscaElmentoControlrealizado(id, (error, controlrealizado) =>{
        if(error){
            //enviar un error 
            console.log(error `Error de ${id}`);
        }
        else{
            //se imprimi el laciente y la hora que se realizo el chequeo de signo vitales
            console.log(`El paciente ${Paciente.nombre}`);
            console.log(`Se realizo el chequeo de sus signo vitales a las ${ controlrealizado.Hora}`);
        }
    })
})


