Feature:SauceDemo_Login_Functionality

@magesh_Web_Login @login @REG
    Scenario Outline:Validation of user registration in saucedemo application
        Given User navigate to the login page with "https://www.saucedemo.com/v1/"
        And Enter the username and password as '<username>' and '<password>'
        And Click the submit button
        Then Verify '<not>' the Home page

Examples:
|username     |password    |not|
|standard_user|secret_sauce|Yes|
|demo         |1234        |No |
|sample       |p@ssw0rd    |No |