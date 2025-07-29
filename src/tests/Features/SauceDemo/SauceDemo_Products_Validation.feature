Feature: SauceDemo_Products_Validation

Background:
    Given User navigate to the login page with "https://www.saucedemo.com/v1/"
    And Enter the username and password as "standard_user" and "secret_sauce"
    And Click the submit button
    Then Verify "Yes" the Home page


Scenario: Validation of maximum and minimum price products in saucedemo application
    And Add first product to chart
    And second product to chart
    And third product to chart
    And Enter the checkout Information
    Then validate the final Premium
    