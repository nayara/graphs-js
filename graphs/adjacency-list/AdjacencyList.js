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

  dfs(start) {
    const result = [];
    const visited = {};
    const list = this.list;

    (function dfsHelper(node) {
      if (!node) return null;

      visited[node] = true;
      result.push(node);

      list[node].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      });
    })(start);

    return result;
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};

    visited[start] = true;

    while (queue.length) {
      let node = queue.shift();
      result.push(node);

      this.list[node].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

module.exports = AdjacencyList;
