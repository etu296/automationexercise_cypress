export const HomePage = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
        cy.visit("https://automationexercise.com/");
    };

    export const verifyURL = () => {
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
        Cypress.on("uncaught:exception", (err) => {
          /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false;
          }
        });
    
        cy.url().should("include","https://automationexercise.com/").get('body').should('be.visible');
    };

    export const clickOnAllProduct = () => {
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
      Cypress.on("uncaught:exception", (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
          return false;
        }
      });
      cy.Homepage();
      cy.get('.material-icons').eq(0).click();
    };

    export const navigateProductPage = () => {
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
      Cypress.on("uncaught:exception", (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
          return false;
        }
      });
     cy.clickOnAllProduct();
     cy.get('.container').first().scrollTo('bottom', { ensureScrollable: false, duration: 1000 });
     cy.get('.container').first().scrollTo('top', { ensureScrollable: false, duration: 1000 });
    };

    export const searchAndVerifyProduct = () => {
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
      Cypress.on("uncaught:exception", (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
          return false;
        }
      });
     cy.clickOnAllProduct();
     cy.get('#search_product').type("blue top").
     get("#submit_search").click();
     //verify the peoduct is visivle
     cy.get('.productinfo p').should('be.visible').and('contain.text', 'Blue Top');

    };

