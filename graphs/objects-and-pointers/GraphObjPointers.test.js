const Node = require("./GraphObjPointers");

describe("GraphObjPointers", () => {
  describe("#addNeighbor", () => {
    it("adds neighbor to node", () => {
      const graph = new Node(1);

      graph.addNeighbor(4);
      graph.addNeighbor(7);
      graph.addNeighbor(18);
      graph.addNeighbor(9);

      const neighbors = graph.showNeighbors();

      expect(neighbors).toEqual([4, 7, 18, 9]);
    });
  });
});
