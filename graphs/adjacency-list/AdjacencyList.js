class AdjacencyList {
  constructor() {
    this.list = {};
  }

  addNode(node) {
    this.list[node] = [];
  }

  addEdge(fromNode, toNode) {
    if (this.list[fromNode] && this.list[toNode]) {
      this.list[fromNode].push(toNode);
      this.list[toNode].push(fromNode);
    }
  }

  removeEdge(fromNode, toNode) {
    if (this.list[fromNode] && this.list[toNode]) {
      this.list[fromNode] = this.list[fromNode].filter(
        (node) => node !== toNode
      );

      this.list[toNode] = this.list[toNode].filter((node) => node !== fromNode);
    }
  }

  isEdge(fromNode, toNode) {
    return this.list[fromNode].includes(toNode);
  }
}

module.exports = AdjacencyList;
