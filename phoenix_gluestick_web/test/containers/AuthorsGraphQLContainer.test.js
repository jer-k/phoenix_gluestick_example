import { AuthorsGraphQLContainer } from "containers/AuthorsGraphQLContainer";

describe("containers/AuthorsGraphQLContainer", () => {
  it("renders without an issue", () => {
    const subject = <AuthorsGraphQLContainer />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
