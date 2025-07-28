Feature: Policy_Registration_AppInsurance

@Jeyagandhi_RegisterPolicy @fails @REG
Scenario: Account Creation for AppInsurance
Given User launch the page and navigate to register page
When User enter the details
And user click on submit
Then user should able to see the details


# Scenario: Register an account and Validate the Fields
# Given User launch the page and navigate to register page
# When user enter '<firstname>'
# Then user '<not>' able to navigate next field

# Examples:
# |firstname           |password |not|
# |test@test.com      |12345    |Yes|
# |test@test.com      |123455   |No |