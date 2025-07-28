Feature:Adflow_Shopping_Validation

Background: Adflow Portal Login
    Given User navigate to login page with "https://demo.cyclos.org/ui/login"
    And Enter the username and password "demo" and "1234"
    And Click the login submit button
    And Click the user payment option
       
@jeyagandhi_Web_giftRestaurantVocherFlow
Scenario: Validating the adflow portal
    Given User navigate to Home page and click dashboard
    When I click on Vocher Module
    And navigate to "Restaurant" Vocher option
    And Enter "0.10" amount 
    And click the gift vocher option
    And Validate the gift vocher page
    And click the confirm button to complete the process
    Then verify the gift vocher details

@jeyagandhi_Web_giftVocherFlow
Scenario Outline: Adding Cinema Vocher and validating the vocher
    Given User navigate to Home page and click dashboard
    When I click on Vocher Module
    And navigate to '<VocherType>' Vocher option
    And Enter '<amountValue>' amount 
    And click the gift vocher option
    Then user should see the amount maximum message
    
 Examples:
 |VocherType|amountValue|
 |Gift      |0.10       |
 |Cinema    |0.10       |