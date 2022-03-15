describe("Home Page", () => {
  it("Renders h1", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").contains("Hello world!");
  });
});
