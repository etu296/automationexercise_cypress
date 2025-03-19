describe('Describe Test case 1', () => {
    before(() => {
        cy.Homepage(); // visit the url before every test
	});

    it('should be verify if the webpage is visible',()=>{
       
        cy.verifyURL();
 
     })
     it('should click on products button ',()=>{

        cy.xpath("//a[@href ='/products']").click();
 
     })

});
