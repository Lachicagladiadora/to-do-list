/// <reference types="cypress" />
it("To-Do List App", () => {
  cy.visit("/");

  cy.get('input[placeholder="Write a new to-do"]').type("make_ten_push_ups");
  cy.get('button[aria-label="Save To-Do"]').click();
  cy.get("ul").should("contain", "make_ten_push_ups");

  cy.get('input[placeholder="Write a new to-do"]').type(
    "make_seven_pull_ups{enter}"
  );
  cy.get("ul").should("contain", "make_seven_pull_ups");

  cy.get('input[placeholder="Write a new to-do"]').type("pull");
  cy.get("ul").should("contain", "make_seven_pull_ups");
  cy.get("ul").should("not.contain", "make_ten_push_ups");

  cy.contains("li", "make_seven_pull_ups")
    .find('input[type="checkbox"]')
    .click();
  cy.get("ul").should("contain", "make_seven_pull_ups");
  cy.get("ul").should("not.contain", "make_ten_push_ups");

  cy.get('input[placeholder="Write a new to-do"]').clear();
  cy.get("ul").should("contain", "make_seven_pull_ups");
  cy.get("ul").should("contain", "make_ten_push_ups");

  cy.get('button[aria-label="Hide completed todos"]').click();
  cy.get("ul").should("not.contain", "make_seven_pull_ups");
  cy.get("ul").should("contain", "make_ten_push_ups");

  cy.get('button[aria-label="Display completed todos"]').click();
  cy.get("ul").should("contain", "make_seven_pull_ups");
  cy.get("ul").should("contain", "make_ten_push_ups");

  cy.get('button[aria-label="Delete all completed"]').click();
  cy.get("ul").should("not.contain", "make_seven_pull_ups");
  cy.get("ul").should("contain", "make_ten_push_ups");
});

// "Display complete todos"
