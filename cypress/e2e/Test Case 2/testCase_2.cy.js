describe('Describe Test case 2', () => {
   

    it('should visit homepage & verify if the webpage is visible',()=>{
        
        cy.Homepage();
        cy.verifyURL();
 
     })
     it('should click on view product',()=>{
        cy.clickOnViewProduct();
  
      })
      it('verify product details is opend',()=>{
        cy.clickOnViewProduct();
        cy.verifyProductDetailsPage();
  
      })

      it('should increase quantity to 4 then click on add to cart then view cart & verify product 7 quantity',()=>{
        cy.clickOnViewProduct();
        cy.increaseQuantityAddToCartViewCart();
  
      })

    });