# - Automation Testing with Cypress

This project contains automated test scripts for **AutomationExercise.com** using **Cypress**. The test cases cover product searching and adding a product to the cart with a specific quantity.

## - Test Scenarios

### - Test Case 1:
1. Launch the browser.
2. Navigate to [AutomationExercise](http://automationexercise.com/).
3. Verify the home page is displayed correctly.
4. Click on the 'Products' button.
5. Ensure the user is navigated to the **All Products** page.
6. Enter a product name in the search box and search.
7. Confirm that 'SEARCHED PRODUCTS' is visible.
8. Verify all relevant products are displayed.

### - Test Case 2: 
1. Launch the browser.
2. Navigate to [AutomationExercise](http://automationexercise.com/).
3. Verify the home page is displayed correctly.
4. Click 'View Product' on any product from the home page.
5. Ensure the product details page is opened.
6. Increase the product quantity to **4**.
7. Click the 'Add to Cart' button.
8. Click the 'View Cart' button.
9. Confirm the product is displayed in the cart with the exact quantity.

## - How to Run the Tests
1. Clone this repository:
git clone https://github.com/your-username/your-repo.git
