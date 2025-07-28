Feature:Cyclos_MarketPlace_Validation

Background: Adflow Portal Login
    Given User navigate to login page with "https://demo.cyclos.org/ui/login"
    And Enter the username and password "demo" and "1234"
    And Click the login submit button
    

@jeyagandhi_MarketCyclos
    Scenario:Validation of marketplace application
       Given I navigate to the marketplace
       And I select the item from marketplace
       And I perform the payment
       And I enter the amount for the item
       And I confirm the payment