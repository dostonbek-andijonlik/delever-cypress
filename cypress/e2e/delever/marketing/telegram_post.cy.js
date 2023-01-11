Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  //import Couriers  from "./delever-cypress/cypress/e2e/pages/Personnel/couriers.js";
  import loginPage from "../../pages/login/login.js"
  import SideBars from "../../pages/sidebar.js"
  import TelegramPost from '../../pages/Marketing/telegram_posts'
  
  const imagesPath = 'C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/pizza.jpg'
  const videoPath = 'C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/example.mp4'
  const gifPath = 'C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/exampleGIF.gif'
  
  
  describe('Telegram Post', () => {
  
    beforeEach(() => {
      //logine
      cy.visit('https://test.admin.delever.uz')
      loginPage.login()      
      SideBars.elements.marketingPage().click()
      TelegramPost.elements.telegramPostsPage().click()
    });
  
    it('Search Telegram Post', () => {
      cy.wait(1000)
      TelegramPost.searchPost(
        'Test Post'
      )
    });
  
    it('Choose Content Type', () => {
      cy.wait(1000)
      TelegramPost.selectContentType("Gif")
    });
  
    it.only('Add Post', () => {
        cy.wait(1000)
        TelegramPost.addPost(
          "hello from cypress",
          imagesPath,
          //videoPath,
          //gifPath,
        )
    });
  
  
  });