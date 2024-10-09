const dfs = (start, list) => {
  const result = [];
  const visited = {};

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
};

const bfs = (start, list) => {
  const queue = [start];
  const result = [];
  const visited = {};

  visited[start] = true;

  while (queue.length) {
    let node = queue.shift();
    result.push(node);

    list[node].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }

  return result;
};

const traversal = {
  bfs,
  dfs,
};

module.exports = traversal;
