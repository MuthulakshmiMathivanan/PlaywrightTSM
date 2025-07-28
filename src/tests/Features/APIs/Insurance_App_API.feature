Feature: Insurance_App_API

@sevugan_API_appInsurance @fails @REG
Scenario Outline: Test Insurance App API - E2E Functionality
    Given Test Login functionality for insurance app "http://192.168.99.141:5000/home"
    When Issue policy from insurance app "http://192.168.99.141:5000/Dashboard" with "<Name>","<Gender>", "<Email>", "<Address>", "<DateOfBirth>", "<PolicyType>", "<SumInsured>" and "<Premium>"
    And I retrieve the list of users from insurance app "http://192.168.99.141:5000/Dashboard"
    Then Delete the already existed Insurance "http://192.168.99.141:5000/Dashboard/"


Examples: 
    |   Name          | Gender | Email                                                | Address           |     DateOfBirth | PolicyType             | SumInsured | Premium |
    | Expleo           | Male      | Expleo@expleogroup.com         | princeInfocity|   1998-04-17      | Life Insurance       | 100000          | 1000          |
    | Sevugan       | Male       | Sevugan@expleogroup.com    | MEPZ                |    2000-10-24   | Vehicle Insurance| 300000         | 2000          |
    | Jeyagandhi  | Female | Jeyagandhi@gmai.com              | Chennai           |   1991-03-06     | Health Insurance | 500000         | 3000          |
    | Guru               | Male      | Guru@expleogroup.com.in        | MEPZ               |   1981-01-14       | Health Insurance | 100000          | 6000         |
    | Thamarai      | Male       | Thamarai@yahoo.com               | Chennai            |   1991-03-18      | Vehicle Insurance| 500000         | 7000         |
    | Magesh         | Male       | Magesh@outlook.com               | princeInfocity |   2002-08-20   | Life Insurance       | 100000          | 1000          |

      