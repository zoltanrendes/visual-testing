describe("AppTest", () => {
  it(`Demo App`, function () {
    // Navigate to the url we want to test
    cy.visit("http://localhost:3000");

    // Call Open on eyes to initialize a test session
    cy.eyesOpen({
      appName: "Demo App",
      testName: "Demo App",
    });

    // do the checks
    cy.eyesCheckWindow({
      tag: "Root full",
      target: "region",
      selector: {
        type: "css",
        selector: "#root",
      },
      fully: true,
    });

    cy.eyesCheckWindow({
      tag: "Root match layout",
      target: "region",
      layout: [
        {
          selector: "#root",
        },
      ],
      fully: true,
    });

    cy.eyesCheckWindow({
      tag: "Root match strict",
      target: "region",
      strict: [
        {
          selector: "#root",
        },
      ],
      fully: true,
    });

    // Call Close on eyes to let the server know it should display the results
    cy.eyesClose();
  });
});
