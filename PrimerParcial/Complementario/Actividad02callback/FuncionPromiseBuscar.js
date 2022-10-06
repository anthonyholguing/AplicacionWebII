//contante para exportar los arreglos de datos.js
const { Controlrealizado, paciente  } = require('./datos')


//una funcion para buscar el paciente dentro de una función flecha
BuscaElmentepaciente = (id) =>{ 
    return new Promise( ( resolve, reject ) =>{ 
        const Paciente = paciente.find( p => p.id === id);
        ( Paciente )
        ?resolve( Paciente ) 
        :reject(`El paciente ${id} no existe`)
    })
}

//segunda busqueda de controlrealizado
BuscaElmentoControlrealizado = (id) =>{ 
    return new Promise( ( resolve, reject ) =>{ 
        const Control = Controlrealizado.find( c => c.id === id);
        ( Control )
        ?resolve( Control ) 
        :reject(`El paciente ${id} no existe`)
    })
}




let id= 4;


BuscaElmentepaciente(id) //Llamado de la primera funcion y pasar el id a buscar
.then(Paciente =>{console.log(`El paciente ${Paciente.nombre}`)}) //Llamado de la primera promesa
.catch(error =>{console.log(error)}); //llamada del error
BuscaElmentoControlrealizado(id)//Llamado de la segunda funcion y pasar el id a buscar
.then( Control => {console.log(`Se realizo el chequeo de sus signo vitales a las ${ Control.Hora}`)})//Llamado de la primera promesa
.catch(error =>{console.log(error)}); //llamada del error
