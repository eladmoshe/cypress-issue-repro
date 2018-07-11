## Cypress querying issue reproduction

### Problem description
When trying to verify the existence  an marker in Google maps, it seams that the easiest way to do
so is to query for an `img` element with the appropriate `src` attribute. For example:
```
it("should find element by querySelector", () => {
    cy.visit("/");
    cy.get("img[src*='spotlight-poi2_hdpi.png']");
  });
```
When running this test in a headed browser (Chrome, headed Electron), the test passes consistently.
However, when running in a headless Electron, the test always fails as it does not find the element.
 
### How to reproduce
1. Clone the repo
1. Run `npm i`
1. Start the static file server: `npm run serve`
1. Run Cypress (headed): `npm run cypress:headed`. The test will pass.
1. Run Cypress (headless): `npm run cypress:headless`. The test will fail.