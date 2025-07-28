@sevugan_Web_Automationdemo @fails
Feature:Automationdemo_Registration

    Scenario:Validation of registration details in automation demo portal
        Given User Launch the automation demo site
        And fill the mandatory details "Tester" and "one"
        And upload an file in the portal
        And Fill the address details,Email,and phone Number fileds
        And Enter the Gender details as "Male"
       Then Validate the file is uploaded or not

      Scenario Outline:Validate the Email field in the page
            Given User Launch the automation demo site
            Given User enters the email address as "<Email>"
            Then Validate whether the email is correct or not 

         Examples:
             |Email              |
             |magesh@208gmail.com|
             |678@gmail.com|
             |w*cd@gmail.com|
             |sadwe@com|   