@magesh_add_Invalid @fails
Feature: Cyclos_Validate the users Payment
    Background: Login With  valid Credentials
        Given User navigate to login page with "https://demo.cyclos.org/ui/login"
        And Enter the username and password "demo" and "1234"
        And Click the login submit button
        Then Verify the Home page title as " Cyclos "

    Scenario:Payment validation   
        Given Click the user payment option
        And I perform the user payment
        And I click the confirm button
        Then I validate the payment