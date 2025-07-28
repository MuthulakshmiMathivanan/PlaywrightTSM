Feature: Login_Validation_InsuranceApp

@Jeyagandhi_LoginValidation @fails @REG
Scenario Outline: Login Creation
Given User launch the page
When user enter '<username>' and '<password>'
Then user '<not>' able to navigate home page

Examples:
|username           |password |not|
|test@test.com      |12345    |Yes|
|test@test.com      |123455   |No |
|test               |12345    |No |
|jeya.jina@gmail.com|1234     |Yes|
|test@test.com      |wrongpw  |No |
|test@test.com      |123456   |No |
|invalid@user.com   |12345    |No |