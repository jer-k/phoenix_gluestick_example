import { AuthorGraphQLContainer } from "containers/AuthorGraphQLContainer";

describe("containers/AuthorGraphQLContainer", () => {
  it("renders without an issue", () => {
    const subject = <AuthorGraphQLContainer />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
