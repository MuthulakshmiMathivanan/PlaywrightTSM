Feature: SauceDemo_Payment_Shipment_Validation

Background:
    Given User navigate to the login page with "https://www.saucedemo.com/v1/"
    And Enter the username and password as "standard_user" and "secret_sauce"
    And Click the submit button
    Then Verify "Yes" the Home page
    

Scenario: Validation of shipment and payment functionality in saucedemo
    Given Select min or max price product and click add to cart button value "MAX"
    And verify the MyCart page URL
    And verify two of the products in MyCart and click checkout button
    And verify the checkout page URL
    And User enter checkout information and click continue button
    And verify the overview page URL
    And Verify paying and shipping information in overview page
    And Click Finish button to confirm your order
    And Verify the checkout-complete page URL
    Then User take final order confirmation screenshot