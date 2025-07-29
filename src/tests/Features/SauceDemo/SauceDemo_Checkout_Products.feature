Feature: SauceDemo_Checkout_Products

Background:
    Given User navigate to the login page with "https://www.saucedemo.com/v1/"
    And Enter the username and password as "standard_user" and "secret_sauce"
    And Click the submit button
    Then Verify "Yes" the Home page
    

Scenario: Validation of checkout functionality in saucedemo application
    Given Using filter to select the products
    And verify the MyCart page URL
    And Click checkout button
    And verify the checkout page URL
    And User enter checkout information and click continue button
    And verify the overview page URL
    And Click Finish button to confirm your order
    And Verify the checkout-complete page URL
    Then User take final order confirmation screenshot