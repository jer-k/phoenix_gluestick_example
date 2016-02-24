import BookList from "components/BookList";

describe("components/BookList", () => {
  it("renders without an issue", () => {
    const subject = <BookList />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
