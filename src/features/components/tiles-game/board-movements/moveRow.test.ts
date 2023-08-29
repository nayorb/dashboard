import { moveRow } from "./moveRow";

describe("common", () => {
  describe("moveRow", () => {
    describe("should move one tile to the end", () => {
      it("should move one tile to the end - 1", () => {
        expect(moveRow([{ value: 2, id: "1" }, null, null, null])).toEqual([null, null, null, { value: 2, id: "1" }]);
      });

      it("should move one tile to the end - 2", () => {
        expect(moveRow([null, { value: 2, id: "1" }, null, null])).toEqual([null, null, null, { value: 2, id: "1" }]);
      });

      it("should move one tile to the end - 3", () => {
        expect(moveRow([null, null, { value: 2, id: "1" }, null])).toEqual([null, null, null, { value: 2, id: "1" }]);
      });

      it("should move one tile to the end - 4", () => {
        expect(moveRow([null, null, null, { value: 2, id: "1" }])).toEqual([null, null, null, { value: 2, id: "1" }]);
      });
    });

    describe("should merge tiles and move to the end", () => {
      it("should merge tiles - 1", () => {
        expect(moveRow([{ value: 2, id: "1" }, null, { value: 2, id: "2" }, null])).toEqual([
          null,
          null,
          null,
          { value: 3, id: "1" },
        ]);
      });

      it("should merge tiles - 2", () => {
        expect(moveRow([{ value: 2, id: "1" }, null, { value: 2, id: "2" }, null])).toEqual([
          null,
          null,
          null,
          { value: 3, id: "1" },
        ]);
      });

      it("should merge tiles - 3", () => {
        expect(moveRow([{ value: 2, id: "1" }, { value: 2, id: "2" }, null, { value: 3, id: "3" }])).toEqual([
          null,
          null,
          { value: 3, id: "1" },
          { value: 3, id: "3" },
        ]);
      });

      it("should merge tiles - 4", () => {
        expect(
          moveRow([
            { value: 2, id: "1" },
            { value: 2, id: "2" },
            { value: 3, id: "3" },
            { value: 3, id: "4" },
          ]),
        ).toEqual([null, null, { value: 3, id: "1" }, { value: 4, id: "3" }]);
      });
    });
  });
});
