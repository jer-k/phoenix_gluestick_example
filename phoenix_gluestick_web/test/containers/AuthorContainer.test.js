import { AuthorContainer } from "containers/AuthorContainer";

describe("containers/AuthorContainer", () => {
  it("renders without an issue", () => {
    const subject = <AuthorContainer />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
