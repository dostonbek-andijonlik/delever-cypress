Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "../../../pages/login/login";
import SideBar from "../../../pages/sidebar";
import General from "../../../pages/catalog/products/general.js";


const imagesPath =
  "C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/pizza.jpg";
const varImagePath =
  "C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/food.jpg";

describe("Catalog Product", () => {
  beforeEach(() => {    
    cy.viewport(1900, 900)
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
    loginPage.login();
    SideBar.catalog();
  });

  it.only('req', () => {
      cy.request({
        url: "https://test.shipper-user.api.delever.uz/v1/category",
        method: "POST",
        headers: {
          "authorization":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzQ1MzgzNzAsImlhdCI6MTY3MzI0MjM3MCwiaXNzIjoidXNlciIsInNoaXBwZXJfaWQiOiJkNGIxNjU4Zi0zMjcxLTQ5NzMtODU5MS05OGE4MjkzOWE2NjQiLCJzdWIiOiIyMjVlYWE3OC02ZmRkLTRiZDUtYmY1Yi00MWVkNDI5MzBlMmQiLCJ1c2VyX3JvbGVfaWQiOiI0MTlmMzFkZS0yYTA3LTQ1ZjYtYThiZC1hOWNiYTIxZTcxM2QiLCJ1c2VyX3R5cGVfaWQiOiIyYTFlZmQ0YS1kNTI3LTRjYzItYWRmYS1hNzU0NjAyMWYwZjYifQ.zuzQNk17ZywuJZMYEqASzndcgoJ5yBkLxYjH1e5qgWc"
        },
        body: {
          "description": "string",
          "description_v2": {
            "en": "CypressTest",
            "ru": "CypressTest",
            "uz": "CypressTest"
          },
          "image": imagesPath,
          "name": "CypressTest",
          "order_no": "2",
          "parent_id": "",
          "title": {
            "en": "CypressTest Description",
            "ru": "CypressTest Description",
            "uz": "CypressTest Description"
          }
        }
      }).then((response) => {
        cy.log(response.body.category_id)
        Cypress.env('category_id', response.body.category_id)
      })
      cy.log(Cypress.env('category_id'))
  });

  // SMY35 General product -------------------------------
  it("Add General Product", () => {
    cy.wait(1000);
    General.addGenProd(
      "сайпресс",
      "сайпресс описание",
      "cypress",
      "cypress description",
      "cypress uz",
      "cypress desc",
      true,
      "1",
      "Главный",
      "suzma",
      "Делимый",
      "Нет на складе",
      "Миллилитр",
      "UZS",
      "33",
      "336",
      "123",
      "321",
      imagesPath
    );


    cy.request()
  });
  
  it("Edit General Product", () => {
    cy.wait(1000);
    General.editGenProd(
      "сайпресс",
      "сайпресс редак",
      "сайпресс редак описание",
      "cypress edit",
      "cypress description",
      "cypress uz edit",
      "cypress desc",
      true,
      "5",
      "33",
      "336",
      "123",
      "321",
      imagesPath
    );
  });
  
  
  it("Link Products", () => {
    cy.wait(2000);
    General.linkProducts("сайпресс", "prostoy");
  });
  
  it("Delete Link Products", () => {
    cy.wait(2000);
    General.deleteLinkedProduct("сайпресс", "prostoy");
  });
  
  it("Add variation", () => {
    cy.wait(1000);
    General.addVariation(
      "сайпресс",
      "balmaz",
      "123",
      "12345",
      varImagePath
    );
  });
  
  it("Link product t Variation", () => {
    cy.wait(1000);
    General.linkProductToVariation("сайпресс", "pizza iiko");
  });
  
  it("Delete Variation", () => {
    cy.wait(1000);
    General.deleteVariation("сайпресс", "сайпресс balmaz");
  });

  
  it("Delete", () => {
    cy.wait(1000);
    General.deleteGenProd("сайпресс");
  });
});
