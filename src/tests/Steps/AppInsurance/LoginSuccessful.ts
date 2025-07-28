import { Given,Then,When } from "@cucumber/cucumber";
import { LoginPage } from "../../Pages/AppInsurance/Loginpage";
import { pageObject } from "../../Hooks/PageObjects";
import { assertText, assertURL, sendkeys } from "../../Helper/Actions";
import { send } from "process";

let loginPage:LoginPage;

// Launch Application Method

Given('User launch the page', async function () {
    loginPage = new LoginPage()
    await loginPage.navigate();
    console.log("url")
  });

// Fill Username and password method
  
  When('user enter {string} and {string}', async function (user1:any,pass1:any) {
    await loginPage.enterUsername(user1);
    await loginPage.enterPassword(pass1);
    await loginPage.submit();
  });

// Navigate Home page method

  Then('user {string} able to navigate home page', async function (option:any) {
   await loginPage.assertHomePage(option);
  });

// Navigate to register page method 

  Given('User navigate to register page', async function () {
    await loginPage.assertRegisterPageText();
  });

// Assert register details method

  Then('the user should able to see the details', async function () {
   await loginPage.assertRegisterPage();
  });

  