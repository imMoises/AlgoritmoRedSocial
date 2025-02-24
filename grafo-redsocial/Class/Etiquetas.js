export class Etiquetas {
    constructor() {
        this.etiquetas = {};
    }
    addEtiqueta(node, etiqueta) {
        if(!this.etiquetas[node]){
            this.etiquetas[node] = [];
        }
        this.etiquetas[node].push(etiqueta);
    }
    display() {
        console.log(this.etiquetas);
    }
    vaciarEtiquetas() {
        this.etiquetas = {};
    }

    obtenerEtiquetaDominante(node, vecinos) {
        const todasLasEtiquetas = [];

        
        todasLasEtiquetas.push(this.etiquetas[node]);

        vecinos.forEach((vecino) => {
            if (this.etiquetas[vecino]) {
                todasLasEtiquetas.push(...this.etiquetas[vecino]);
            }
        });

       
        const contador = {};
        todasLasEtiquetas.forEach((etiqueta) => {
            contador[etiqueta] = (contador[etiqueta] || 0) + 1;
        });

 
        let etiquetaMasRepetida = null;
        let maxCount = 0;

        for (const etiqueta in contador) {
            if (contador[etiqueta] > maxCount) {
                maxCount = contador[etiqueta];
                etiquetaMasRepetida = etiqueta;
            }
        }

       
        if (maxCount === 1) {
            const etiquetasUnicas = Object.keys(contador);
            etiquetaMasRepetida = etiquetasUnicas[Math.floor(Math.random() * etiquetasUnicas.length)];
        }

        return etiquetaMasRepetida;
    }

EtiquetaDominanteIgualEntreNodo() {
        const valores = Object.values(this.etiquetas);
        if(valores.length === 0) return false

        const primeraEtiqueta = valores[0].toString(); 
        for (let i = 1; i < valores.length; i++) {
            if (valores[i].toString() !== primeraEtiqueta) {
                return false;
            }
        }
        return true;
    }
}
