    const Graf  = require("./Class/Grafo.js");
    const Etiquetas  = require("./Class/Etiquetas.js");
    const xlsx = require("xlsx");

const excelPath = './data.xlsx';


const Instagram = new Graf();
const etiquetas1 = new Etiquetas();
const etiquetas2 = new Etiquetas();

//Leer el archivo excel
const workbook = xlsx.readFile(excelPath);

//Leer las hojas
const nodosSheet = workbook.Sheets['nodos']
const relacionesSheet = workbook.Sheets['relaciones']
const etiquetasSheet = workbook.Sheets['etiquetas']

//Convertir las hojas a un array de objetos
const nodos = xlsx.utils.sheet_to_json(nodosSheet)
const relaciones = xlsx.utils.sheet_to_json(relacionesSheet)
const etiquetas = xlsx.utils.sheet_to_json(etiquetasSheet)


nodos.forEach((nodo)=>{
    Instagram.addNode(nodo.nodos)
})

relaciones.forEach((relacion)=>{
    
    Instagram.addEdge(relacion.nombre, relacion.vecinos)
})

etiquetas.forEach((etiqueta)=>{ 
    
    etiquetas1.addEtiqueta(etiqueta.nodo, etiqueta.etiqueta)
})

Instagram.display()
etiquetas1.display()

const compararListaEtiquetas = (etiquetas1, etiquetas2) => { 
    const keys1 = Object.keys(etiquetas1.etiquetas);
    
    for (const key of keys1) {
        if (etiquetas1.etiquetas[key].toString() !== etiquetas2.etiquetas[key].toString()) {
            return false; 
        }
    }
    return true;
 }


 const TrasladarEtiquetas = (etiquetas1, etiquetas2) => {
    const keys2 = Object.keys(etiquetas2.etiquetas);
    etiquetas1.vaciarEtiquetas()
    for (const key of keys2) {
        etiquetas1.addEtiqueta(key, etiquetas2.etiquetas[key].toString())
    }
    etiquetas2.vaciarEtiquetas()
 }

let finCiclo = false
let contador = 0

while(finCiclo !== true){
    contador++
    Object.keys(Instagram.list).forEach((node)=>{
        const adyacentes = Instagram.list[node]
        const etiquetaDominante = etiquetas1.obtenerEtiquetaDominante(node, adyacentes)
        etiquetas2.addEtiqueta(node, etiquetaDominante)
    })
    if (etiquetas2.EtiquetaDominanteIgualEntreNodo()) {
        console.log("El ciclo termina porque Todas las etiquetas dominantes son iguales.")
        finCiclo = true; 
    } else {
        if (compararListaEtiquetas(etiquetas1, etiquetas2)) {
            console.log("El ciclo termina porque las etiquetas1 y etiquetas2 son iguales.")
            finCiclo = true;
        } else {
            
            TrasladarEtiquetas(etiquetas1, etiquetas2); 
        }
    }
}
console.log("Se estabiliza en la iteracion: ", contador)
etiquetas1.display();
etiquetas2.display();









/* while(finCiclo !== true){
    Object.keys(Instagram.list).forEach((node)=>{
        const adyacentes = Instagram.list[node]
        const etiquetaDominante = etiquetas1.obtenerEtiquetaDominante(node, adyacentes)
        etiquetas2.addEtiqueta(node, etiquetaDominante)
    })

    if(etiquetas2.EtiquetaDominanteIgualEntreNodo() === false){
        const array1 = Object.keys(etiquetas1.etiquetas)
        const array2 = Object.keys(etiquetas2.etiquetas)
        let iguales = false
        for (const key in array1){
           if(array1[key] !== array2[key]){
            iguales = true
           }
        }
        if(iguales === true){
            finCiclo = true
        }
        
    }
} */



/* const Moises = Object.keys(Instagram.list).find((node) => node === "Sebastian");
const adyacentes = Instagram.list[Moises];


const etiquetaDominante = etiquetas1.obtenerEtiquetaDominante(Moises, adyacentes);


etiquetas2.addEtiqueta(Moises, etiquetaDominante);


console.log(`Etiqueta dominante para ${Moises}: ${etiquetaDominante}`); */



/* Object.keys(Instagram.list).forEach((node)=>{
    console.log(node, etiquetas1.etiquetas[node])
})

// Mostrar nodos adyacentes de cada usuario
Object.keys(Instagram.list).forEach((node) => {
    const etiquetaPorNodo = [];
    const adyacentes = Instagram.list[node];
    adyacentes.map((adyacente)=>{
        etiquetaPorNodo.push(etiquetas1.etiquetas[adyacente]);
        etiquetaPorNodo.push(etiquetas1.etiquetas[node]);
        console.log(etiquetaPorNodo);
    })
});
 */












