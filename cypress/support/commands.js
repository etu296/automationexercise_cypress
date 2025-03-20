// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-xpath');
//test case 1
import {HomePage,verifyURL,clickOnAllProduct,navigateProductPage,searchAndVerifyProduct} from "../e2e/Test Case 1/helper";

Cypress.Commands.add("Homepage", () => {
    HomePage();
})
Cypress.Commands.add("verifyURL", () => {
    verifyURL();
})
Cypress.Commands.add("clickOnAllProduct", () => {
    clickOnAllProduct();
})
Cypress.Commands.add("navigateProductPage", () => {
    navigateProductPage();
})
Cypress.Commands.add("searchAndVerifyProduct", () => {
    searchAndVerifyProduct();
})

//test case 2
import {clickOnViewProduct,verifyProductDetailsPage,increaseQuantityAddToCartViewCart} from "../e2e/Test Case 2/helper2";

Cypress.Commands.add("clickOnViewProduct", () => {
    clickOnViewProduct();
})

Cypress.Commands.add("verifyProductDetailsPage", () => {
    verifyProductDetailsPage();
})
Cypress.Commands.add("increaseQuantityAddToCartViewCart", () => {
    increaseQuantityAddToCartViewCart();
})