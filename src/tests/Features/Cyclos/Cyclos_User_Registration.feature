Feature:Cyclos_User_Registration

@jeyagandhi_Web_Registration
    Scenario Outline:Registration of mandatory details on cyclo application
        Given User Launch the URL
        And Click on Register link
        And Enter '<username>' '<loginname>' '<email>' mandatory details
        And Click Next and confirm
        And add Password field
        Then Verify the Registration page 
        
    Examples:
    |username|loginname  |email              |
    |admin   |adminlogin |adminuser@gmail.com|

@jeyagandhi_Web_Validation
    Scenario Outline:Validating mandatory details on cyclo application
        Given User Launch the URL
        And Click on Register link
        And Click Next without entering the details and Validate the message
        And Enter '<username>' '<loginname>' '<email>' mandatory details
        And Click Next and confirm
        And add Password field
        Then Verify the Registration page 
        
    Examples:
    |username|loginname  |email              |
    |admin   |adminlogin |adminuser@gmail.com|