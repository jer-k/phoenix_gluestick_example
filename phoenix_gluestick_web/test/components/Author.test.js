import Author from "components/Author";

describe("components/Author", () => {
  it("renders without an issue", () => {
    const subject = <Author />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
