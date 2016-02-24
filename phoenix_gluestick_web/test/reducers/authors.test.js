import reducer from "reducers/authors";

describe("reducers/authors", () => {
  it("returns the initial state", () => {
    expect(
      reducer(undefined, {})
    ).to.equal(null);
  });
});
