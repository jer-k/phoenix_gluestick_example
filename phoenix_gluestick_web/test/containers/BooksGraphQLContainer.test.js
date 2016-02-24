import { BooksGraphQLContainer } from "containers/BooksGraphQLContainer";

describe("containers/BooksGraphQLContainer", () => {
  it("renders without an issue", () => {
    const subject = <BooksGraphQLContainer />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
