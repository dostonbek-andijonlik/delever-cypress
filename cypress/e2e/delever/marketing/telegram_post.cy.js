Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});


// import { LoremIpsum } from "lorem-ipsum";
// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4,
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4,
//   }
// )

import loginPage from "../../pages/login/login.js";
import SideBars from "../../pages/sidebar.js";
import TelegramPost from "../../pages/Marketing/telegram_posts";

const imagesPath =
  "C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/pizza.jpg";
const videoPath =
  "C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/example.mp4";
const gifPath =
  "C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/exampleGIF.gif";

describe("Telegram Post", () => {
  beforeEach(() => {
    //login
    cy.visit("https://test.admin.delever.uz");
    loginPage.login();
    SideBars.elements.marketingPage().click();
    TelegramPost.elements.telegramPostsPage().click();
  });

  it("Add Image Post", () => {
    cy.wait(1000);
    TelegramPost.addPost(
      "cypress image post",
      imagesPath
    );
  });

  it("Add Video Post", () => {
    cy.wait(1000);
    TelegramPost.addPost(
      "cypress video post ",
      videoPath
    );
  });

  it("Add GIF Post", () => {
    cy.wait(1000);
    TelegramPost.addPost(
      "cypress gif post",
      gifPath
    );
  });

  it("Search Telegram Post", () => {
    cy.wait(1000);
    TelegramPost.searchPost("alskd");
  });


  

  
  it("Choose Content Type", () => {
    cy.wait(1000);
    TelegramPost.selectContentType("Gif");
  });
});
