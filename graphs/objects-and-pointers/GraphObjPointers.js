class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = [];
  }

  addNeighbor(node) {
    if (!this.neighbors.includes(node)) {
      this.neighbors.push(node);
    }
  }

  showNeighbors() {
    const neighborsIds = this.neighbors.map((neighbor) => neighbor);

    return neighborsIds;
  }
}

module.exports = Node;
