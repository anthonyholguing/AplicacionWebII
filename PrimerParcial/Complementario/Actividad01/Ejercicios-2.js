// se define tambien las constantes tanto para paciente, SignoVital y Controlrealizado
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
    //ID, Descripción, Nivel mínimo, Nivel máximo
    const SignoVital=[
        {
            id:1,
            descripcion: "Paciente ",
            nivelminimo: 90,
            nivelmaximo: 110,
            condicion: "estable"
        },
        {
            id:2,
            descripcion: "Nada",
            nivelminimo: 92,
            nivelmaximo: 130,
            condicion: "estable"
        },
        {
            id:3,
            descripcion: " Nada",
            nivelminimo: 91,
            nivelmaximo: 120,
            condicion: "estable"
        },
        {
            id:4,
            descripcion: "1354789624",
            nivelminimo: 89,
            nivelmaximo: 125,
            condicion: "estable"
        },
        {
            id:5,
            descripcion: "1354789624",
            nivelminimo: 88,
            nivelmaximo: 140,
            condicion: "estable"
        }
    ] //ID, ID Paciente, ID Signo Vital, Fecha, Hora, Valor
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

//se exporta lo que tenemos en este archivo para utilizar los datos en el Ejercicios-4.js
module.exports={
    paciente, SignoVital, Controlrealizado
}