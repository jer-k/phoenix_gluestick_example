import AuthorList from "components/AuthorList";

describe("components/AuthorList", () => {
  it("renders without an issue", () => {
    const subject = <AuthorList />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
