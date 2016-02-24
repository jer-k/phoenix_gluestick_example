import GraphiQL from "components/GraphiQL";

describe("components/GraphiQL", () => {
  it("renders without an issue", () => {
    const subject = <GraphiQL />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
