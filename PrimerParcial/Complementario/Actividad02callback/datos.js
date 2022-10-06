//constante paciente y sus atributos del arreglo

const paciente=[
    {
        id:1,
        identificacion: "1354789624",
        nombre: "David Loor",
        edad: "40",
        condicion: "estable"
    },
    {
        id:2,
        identificacion: "1301693578",
        nombre: "Luis Garcia",
        edad: "42",
        condicion: "estable"
    },
    {
        id:3,
        identificacion: "1314023684",
        nombre: "Cesar Delgado",
        edad: "45",
        condicion: "estable"
    },
    {
        id:4,
        identificacion: "132639874",
        nombre: "Sergio Zambrano",
        edad: "48",
        condicion: "estable"
    },
    {
        id:5,
        identificacion: "1301436257",
        nombre: "Daniela Palma",
        edad: "52",
        condicion: "estable"
    }
]   

//constante Controlrealizado con sus atributos del arreglo
// aplicar las relaciones
const Controlrealizado=[
    {
        id:1 ,
        idPaciente:1 ,
        idSignoVital:1,
        Fecha:"20/09/2022",
        Hora:"17:00",
        Valor:5
    },
    {
        id:2 ,
        idPaciente:2 ,
        idSignoVital:2 ,
        Fecha:"22/09/2022",
        Hora:"09:00",
        Valor:5
    },
    {
        id: 3 ,
        idPaciente:3 ,
        idSignoVital:3 ,
        Fecha:"24/09/2022",
        Hora:"12:00",
        Valor:5
    },
    {
        id:4 ,
        idPaciente:4 ,
        idSignoVital:4 ,
        Fecha:"26/09/2022",
        Hora:"11:00",
        Valor:5
    },
    {
        id:5 ,
        idPaciente:5 ,
        idSignoVital:5 ,
        Fecha:"28/09/2022",
        Hora:"18:00",
        Valor:5
    }
]

// lo exportamos para utilizarlos 
module.exports={
    paciente, Controlrealizado
}