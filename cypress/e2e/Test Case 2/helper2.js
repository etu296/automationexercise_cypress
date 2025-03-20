export const clickOnViewProduct = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
      cy.Homepage();
      cy.get(".choose").eq(0).click();
    };
    export const verifyProductDetailsPage = () => {
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
        Cypress.on("uncaught:exception", (err) => {
          /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false;
          }
        });
        cy.get('.product-information h2').should('be.visible').and('have.text', 'Blue Top');

        };
        export const increaseQuantityAddToCartViewCart = () => {
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
            Cypress.on("uncaught:exception", (err) => {
              /* returning false here prevents Cypress from failing the test */
              if (resizeObserverLoopErrRe.test(err.message)) {
                return false;
              }
            });
           cy.get("#quantity").click().clear().type("4");
           //add to cart
           cy.get(".btn").eq(1).click();
           //view cart
           cy.get(".text-center").eq(1).click();
           //verify cart with exact quantity
          cy.get('.cart_description').should('contain.text', 'Blue Top');
         // Verify the quantity is 
         cy.get('tr#product-1 td.cart_quantity button.disabled').should('have.text', '4');


            };