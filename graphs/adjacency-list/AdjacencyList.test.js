const AdjacencyList = require("./AdjacencyList");

describe("AdjacencyList", () => {
  describe("#addNode", () => {
    it("add edge to list", () => {
      const adjacencyList = new AdjacencyList();

      adjacencyList.addNode(0);

      const expectedList = { 0: [] };

      expect(adjacencyList.list).toEqual(expectedList);
    });
  });

  describe("#addEdge", () => {
    it("add edge when node exists", () => {
      const adjacencyList = new AdjacencyList();

      adjacencyList.addNode(2);
      adjacencyList.addNode(3);
      adjacencyList.addEdge(2, 3);

      const expectedList = { 2: [3], 3: [2] };

      expect(adjacencyList.list).toEqual(expectedList);
    });

    it("does not adds edge if node not exists", () => {
      const adjacencyList = new AdjacencyList();

      adjacencyList.addEdge(2, 3);

      expect(adjacencyList.list).toEqual({});
    });
  });

  describe("#removeEdge", () => {
    it("remove edge when exits", () => {
      const adjacencyList = new AdjacencyList();
      adjacencyList.addNode(0);
      adjacencyList.addNode(2);
      adjacencyList.addNode(3);

      adjacencyList.addEdge(2, 3);
      adjacencyList.addEdge(0, 2);

      adjacencyList.removeEdge(2, 3);

      const expectedList = { 0: [2], 2: [0], 3: [] };

      expect(adjacencyList.list).toEqual(expectedList);
    });

    it("does not removes edge when node not exists", () => {
      const adjacencyList = new AdjacencyList();
      adjacencyList.addNode(2);
      adjacencyList.addNode(3);

      adjacencyList.addEdge(2, 3);

      adjacencyList.removeEdge(2, 4);

      const expectedList = { 2: [3], 3: [2] };

      expect(adjacencyList.list).toEqual(expectedList);
    });
  });

  describe("#isEdge", () => {
    it("verifies if vertices has edge", () => {
      const adjacencyList = new AdjacencyList();
      adjacencyList.addNode(2);
      adjacencyList.addNode(3);

      adjacencyList.addEdge(3, 2);

      const expectedEdge = adjacencyList.isEdge(2, 3);
      const notExpectedEdge = adjacencyList.isEdge(2, 2);

      expect(expectedEdge).toBeTruthy();
      expect(notExpectedEdge).toBeFalsy();
    });
  });

  describe("#dfs", () => {
    it("returns edges from a start point", () => {
      const adjacencyList = new AdjacencyList();
      adjacencyList.addNode(1);
      adjacencyList.addNode(2);
      adjacencyList.addNode(3);

      adjacencyList.addEdge(1, 3);
      adjacencyList.addEdge(2, 3);

      const result = adjacencyList.dfs(2);

      expect(result).toEqual([2, 3, 1]);
    });
  });

  describe("#bfs", () => {
    it("returns edges from a start point", () => {
      const adjacencyList = new AdjacencyList();
      adjacencyList.addNode(1);
      adjacencyList.addNode(2);
      adjacencyList.addNode(3);

      adjacencyList.addEdge(1, 3);
      adjacencyList.addEdge(2, 3);

      const result = adjacencyList.bfs(2);

      expect(result).toEqual([2, 3, 1]);
    });
  });
});
