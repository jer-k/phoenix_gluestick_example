import Book from "components/Book";

describe("components/Book", () => {
  it("renders without an issue", () => {
    const subject = <Book />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
