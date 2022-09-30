//Se crea la funcion objetos y sus atributos que se requieren
function Objetos(){
    const paciente={
            id:1,
            identificacion: "1354789624",
            nombre: "David Loor",
            edad: "40",
            condicion: "estable"
        }
    const SignoVital={
            id:1,
            descripcion: "Paciente ",
            nivelminimo: 90,
            nivelmaximo: 110,
            condicion: "estable",
            idPaciente:1
        }   
    const Controlrealizado={
            id:1 ,
            idPaciente:1 ,
            idSignoVital:1,
            Fecha:"20/09/2022",
            Hora:"17:00",
            Valor:5,
            idSignoVital:1
        }
}