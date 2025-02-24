import { Graf } from "./Class/Grafo.js";
import { Etiquetas } from "./Class/Etiquetas.js";

const Instagram = new Graf();

//Agregar todos los usuarios
Instagram.addNode("Moisés");
Instagram.addNode("Sergio");
Instagram.addNode("Briceth");
Instagram.addNode("Kevin A.");
Instagram.addNode("Kevin M.");
Instagram.addNode("Nyrlan");
Instagram.addNode("Sara");
Instagram.addNode("Jasis");
Instagram.addNode("Sebastian");
Instagram.addNode("Duman");
Instagram.addNode("D'Alexandra");
Instagram.addNode("Roger");
Instagram.addNode("Nerieth");
Instagram.addNode("Maria");
Instagram.addNode("Domingo");
Instagram.addNode("Robert");
Instagram.addNode("Laura");

//Moisés sigue a
Instagram.addEdge("Moisés", "Nerieth");
Instagram.addEdge("Moisés", "Sergio");
Instagram.addEdge("Moisés", "Kevin A.");
Instagram.addEdge("Moisés", "Kevin M.");
Instagram.addEdge("Moisés", "Briceth");
Instagram.addEdge("Moisés", "Sara");
Instagram.addEdge("Moisés", "Sebastian");
Instagram.addEdge("Moisés", "Maria");
Instagram.addEdge("Moisés", "Roger");

//Nerieth sigue a
Instagram.addEdge("Nerieth", "Moisés");
Instagram.addEdge("Nerieth", "Sergio");
Instagram.addEdge("Nerieth", "Domingo");
Instagram.addEdge("Nerieth", "Briceth");
Instagram.addEdge("Nerieth", "Roger");
Instagram.addEdge("Nerieth", "Laura");
Instagram.addEdge("Nerieth", "Robert");

//Sergio sigue a
Instagram.addEdge("Sergio", "Moisés");
Instagram.addEdge("Sergio", "Nerieth");
Instagram.addEdge("Sergio", "Kevin M.");

//Briceth sigue a
Instagram.addEdge("Briceth", "Moisés");
Instagram.addEdge("Briceth", "Nerieth");
Instagram.addEdge("Briceth", "Sebastian");
Instagram.addEdge("Briceth", "Kevin M.");

//Kevin A. sigue a
Instagram.addEdge("Kevin A.", "Moisés");

//Kevin M. sigue a
Instagram.addEdge("Kevin M.", "Moisés");
Instagram.addEdge("Kevin M.", "Sergio");
Instagram.addEdge("Kevin M.", "Nyrlan");

//Nyrlan sigue a
Instagram.addEdge("Nyrlan", "Kevin M.");

//Sara sigue a
Instagram.addEdge("Sara", "Moisés");
Instagram.addEdge("Sara", "Jasis");

//Jasis sigue a
Instagram.addEdge("Jasis", "Sara");
Instagram.addEdge("Jasis", "Maria");

//Sebastian sigue a
Instagram.addEdge("Sebastian", "Moisés");
Instagram.addEdge("Sebastian", "Briceth");
Instagram.addEdge("Sebastian", "Kevin M.");
Instagram.addEdge("Sebastian", "Duman");
Instagram.addEdge("Sebastian", "Jasis");
Instagram.addEdge("Sebastian", "Roger");
Instagram.addEdge("Sebastian", "Robert");

//Duman sigue a
Instagram.addEdge("Duman", "Sebastian");
Instagram.addEdge("Duman", "D'Alexandra");

//D'Alexandra sigue a
Instagram.addEdge("D'Alexandra", "Duman");
Instagram.addEdge("D'Alexandra", "Roger");

//Roger sigue a
Instagram.addEdge("Roger", "Moisés");
Instagram.addEdge("Roger", "Nerieth");
Instagram.addEdge("Roger", "Laura");
Instagram.addEdge("Roger", "D'Alexandra");
Instagram.addEdge("Roger", "Sebastian");

//Laura sigue a
Instagram.addEdge("Laura", "Nerieth");
Instagram.addEdge("Laura", "Roger");

//Robert sigue a
Instagram.addEdge("Robert", "Nerieth");
Instagram.addEdge("Robert", "Sebastian");

//Maria sigue a
Instagram.addEdge("Maria", "Moisés");
Instagram.addEdge("Maria", "Jasis");

//Domingo sigue a
Instagram.addEdge("Domingo", "Nerieth");


// Para mostrar el grafo
Instagram.display();

const etiquetas1 = new Etiquetas();
const etiquetas2 = new Etiquetas();

//agregando etiquetas
etiquetas1.addEtiqueta("Moisés", "Programación");
etiquetas1.addEtiqueta("Sergio", "Turismo");
etiquetas1.addEtiqueta("Briceth", "Maquillaje");
etiquetas1.addEtiqueta("Kevin A.", "Fotografia");
etiquetas1.addEtiqueta("Kevin M.", "Anime");
etiquetas1.addEtiqueta("Nyrlan", "Programación");
etiquetas1.addEtiqueta("Sara", "Diseño");
etiquetas1.addEtiqueta("Jasis", "Diseño");
etiquetas1.addEtiqueta("Sebastian", "Toros");
etiquetas1.addEtiqueta("Duman", "Deportes");
etiquetas1.addEtiqueta("D'Alexandra", "Maquillaje");
etiquetas1.addEtiqueta("Roger", "Futbol");
etiquetas1.addEtiqueta("Laura", "Modelaje");
etiquetas1.addEtiqueta("Robert", "Futbol");
etiquetas1.addEtiqueta("Maria", "Diseño");
etiquetas1.addEtiqueta("Domingo", "Baile");
etiquetas1.addEtiqueta("Nerieth", "Peliculas");

etiquetas1.display();
etiquetas2.display();
//Asignar etiquetas dominantes a cada usuario


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
            console.log("iteracion: ", contador)
            TrasladarEtiquetas(etiquetas1, etiquetas2); 
        }
    }
}

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












