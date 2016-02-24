import { BookGraphQLContainer } from "containers/BookGraphQLContainer";

describe("containers/BookGraphQLContainer", () => {
  it("renders without an issue", () => {
    const subject = <BookGraphQLContainer />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
