describe("find elements", () => {
  it("should find element by querySelector", () => {
    cy.visit("/");
    cy.get("img[src*='spotlight-poi2_hdpi.png']");
  });
});
