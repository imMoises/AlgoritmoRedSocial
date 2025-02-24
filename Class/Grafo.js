export class Graf {
    constructor() {
        this.list = {};
    }

    addNode(node) {
        this.list[node] = [];
    }

    addEdge(node1, node2) {
        this.list[node1].push(node2);
    }

    display() {
        console.log(this.list);
    }
}