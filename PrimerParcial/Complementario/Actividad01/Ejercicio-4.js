// llamamos las constantes que hemos definido previamente del archivo Ejercicio-2.js
const {   paciente, SignoVital, Controlrealizado} = require('./Ejercicios-2')


function EstructurasRepetitivasFor(){
//For con paciente
    for(let iterador  = 0; iterador<paciente.length;iterador++){
        console.log(paciente[iterador]);
    }
//For con signovital
    for(let iterador  = 0; iterador<SignoVital.length;iterador++){
        console.log(SignoVital[iterador]);
    }
//For con controlrealizado
    for(let iterador  = 0; iterador<Controlrealizado.length;iterador++){
        console.log(Controlrealizado[iterador]);
    } 
}

function EstructurasRepetitivasWhile(){
//While con paciente
    let  iterador=0
    while(iterador<paciente.length){
        console.log(paciente[iterador]);
        iterador++;
    }
//While con SingoVital
    while(iterador<SignoVital.length){
        console.log(SignoVital[iterador]);
        iterador++;
    }
//While con controlrealizado
    while(iterador<Controlrealizado.length){
        console.log(Controlrealizado[iterador]);
        iterador++;
    }
}
function EstructurasRepetitivasDoWhile(){
//DoWhile con paciente
    let  iterador=0
    do{
        console.log(paciente[iterador]);
        iterador++;
    }
    while(iterador<paciente.length);

//DoWhile con signovital
    do{
        console.log(SignoVital[iterador]);
        iterador++;
    }
    while(iterador<SignoVital.length);
    //DoWhile con controlrelizado
    do{
        console.log(Controlrealizado[iterador]);
        iterador++;
    }
    while(iterador<Controlrealizado.length);
}

EstructurasRepetitivasFor();
EstructurasRepetitivasWhile();
EstructurasRepetitivasDoWhile();
