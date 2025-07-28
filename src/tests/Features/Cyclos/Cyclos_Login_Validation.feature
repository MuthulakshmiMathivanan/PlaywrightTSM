 @jeyagandhi_Web_Cyclosdemo 
Feature:Cyclos_Payment_Validation

    Scenario:Cyclos login with valid credentials 
        Given User navigate to login page with "https://demo.cyclos.org/ui/login"
        And Enter the username and password "demo" and "1234"
        And Click the login submit button
        Then Verify the Home page title as " Cyclos "

    Scenario:Cyclos login with valid Username and invalid Password 
        Given User navigate to login page with "https://demo.cyclos.org/ui/login"
        And Enter the username and password "<Username>" and "<Password>"
        And Click the login submit button
        Then Verify the Invalid message as "The given name / password are incorrect. Please, try again."   

        Examples:
            | Username | Password | 
            | demo     | 6578     | 
            | demo     | 8769     |

    Scenario:Cyclos login with invalid Username and valid Password 
        Given User navigate to login page with "https://demo.cyclos.org/ui/login"
        And Enter the username and password "<Username>" and "<Password>"
        And Click the login submit button
        Then Verify the Invalid message as "The given name / password are incorrect. Please, try again."   

        Examples:
            | Username | Password | 
            | demo5    | 1234     | 
            | demo6    | 1234     |        

    Scenario:Cyclos login with invalid credentials 
        Given User navigate to login page with "https://demo.cyclos.org/ui/login"
        And Enter the username and password "<Username>" and "<Password>"
        And Click the login submit button
       Then Verify the Invalid message as "The given name / password are incorrect. Please, try again."   

        Examples:
            | Username | Password | 
            | demo1    | 6578     | 
            | demo2    | 8769     |
            | demo3    | 4535     |
            | demo4    | 986968   |

  