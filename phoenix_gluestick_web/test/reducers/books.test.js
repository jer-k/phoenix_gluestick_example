import reducer from "reducers/books";

describe("reducers/books", () => {
  it("returns the initial state", () => {
    expect(
      reducer(undefined, {})
    ).to.equal(null);
  });
});
