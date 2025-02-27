class Graf {
    constructor() {
        this.list = {};
    }

    addNode(node) {
        this.list[node] = [];
    }

    addEdge(node1, node2) {
        if (!this.list[node1]) {
            console.warn(`El nodo ${node1} no existe. Asegúrate de agregarlo primero.`);
            return; // Salir si el nodo no existe
        }
        if (!this.list[node2]) {
            console.warn(`El nodo ${node2} no existe. Asegúrate de agregarlo primero.`);
            return; // Salir si el nodo no existe
        }
        this.list[node1].push(node2);
    }

    display() {
        console.log(this.list);
    }
}

module.exports = Graf;