const AdjacencyMatrix = require("./AjacencyMatrix");

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
});
