import { Given,Then,When } from "@cucumber/cucumber";
import { ManagerLogin } from "../../Pages/Banking/ManagerLogin";
import { pageObject } from "../../Hooks/PageObjects";
import { assertText, toClick } from "../../Helper/Actions";

let details:ManagerLogin;

// Login details method for manager login page

Given('User navigate to the login screen', async function () {
    details = new ManagerLogin()
    await details.navigate();
  });

// CLick manager method
  
When('user click on Manager Login', async function () {
    await details.clickManager();
    
});

// Fill details method for manager login

When('click on Add customer option', async function () {
    await details.fillDetails();
  });

//  Open customer details method
  
  When('Open the customer Details', async function () {
  await  details.openCustomer();
  });