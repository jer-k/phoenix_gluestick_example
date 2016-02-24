import { AuthorsContainer } from "containers/AuthorsContainer";

describe("containers/AuthorsContainer", () => {
  it("renders without an issue", () => {
    const subject = <AuthorsContainer />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
