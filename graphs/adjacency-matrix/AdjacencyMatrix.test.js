const traversal = require("../traversal-helpers/traversal");
const AdjacencyMatrix = require("./AdjacencyMatrix");

describe("AdjacencyMatrix", () => {
  describe("#new", () => {
    it("initialize an empty matrix", () => {
      const { matrix } = new AdjacencyMatrix(2);

      const empty2x2Matrix = [
        [0, 0],
        [0, 0],
      ];

      expect(matrix.length).toBe(2);
      expect(matrix).toEqual(empty2x2Matrix);
    });
  });

  describe("#addEdge", () => {
    it("it creates edge between two vertices", () => {
      const adjacencyMatrix = new AdjacencyMatrix(3);

      adjacencyMatrix.addEdge(1, 2);

      const expectedResult = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 0],
      ];

      expect(adjacencyMatrix.matrix).toEqual(expectedResult);
    });
  });

  describe("#removeEdge", () => {
    it("removes an edge between two vertices", () => {
      const adjacencyMatrix = new AdjacencyMatrix(3);
      adjacencyMatrix.addEdge(1, 2);
      adjacencyMatrix.addEdge(0, 1);

      adjacencyMatrix.removeEdge(1, 2);

      const expectedResult = [
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ];

      expect(adjacencyMatrix.matrix).toEqual(expectedResult);
    });
  });

  describe("#isEdge", () => {
    it("verifies if vertices has edge", () => {
      const adjacencyMatrix = new AdjacencyMatrix(3);

      adjacencyMatrix.addEdge(1, 2);

      const expectedEdge = adjacencyMatrix.isEdge(1, 2);
      const notExpectedEdge = adjacencyMatrix.isEdge(2, 2);

      expect(expectedEdge).toBeTruthy();
      expect(notExpectedEdge).toBeFalsy();
    });
  });

  describe("#dfs", () => {
    it("returns edges from a start point", () => {
      const adjacencyMatrix = new AdjacencyMatrix(3);
      adjacencyMatrix.addEdge(1, 2);
      adjacencyMatrix.addEdge(0, 1);

      const result = traversal.dfs(2, adjacencyMatrix.matrix);

      expect(result).toEqual([2, 1]);
    });
  });

  describe("#bfs", () => {
    it("returns edges from a start point", () => {
      const adjacencyMatrix = new AdjacencyMatrix(3);
      adjacencyMatrix.addEdge(1, 2);
      adjacencyMatrix.addEdge(0, 1);

      const result = traversal.bfs(2, adjacencyMatrix.matrix);

      expect(result).toEqual([2, 0, 1]);
    });
  });
});
