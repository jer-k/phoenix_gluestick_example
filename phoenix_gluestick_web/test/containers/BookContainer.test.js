import { BookContainer } from "containers/BookContainer";

describe("containers/BookContainer", () => {
  it("renders without an issue", () => {
    const subject = <BookContainer />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
