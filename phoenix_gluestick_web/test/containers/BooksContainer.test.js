import { BooksContainer } from "containers/BooksContainer";

describe("containers/BooksContainer", () => {
  it("renders without an issue", () => {
    const subject = <BooksContainer />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
