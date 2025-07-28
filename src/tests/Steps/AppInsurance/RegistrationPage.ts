import { Given,Then,When } from "@cucumber/cucumber";
import { Registration } from "../../Pages/AppInsurance/Registration";

let registrationPage:Registration;

// Launch Application Method

Given('User launch the page and navigate to register page', async function () {
    registrationPage = new Registration()
    await registrationPage.navigate();
    console.log("url")
  });

// Fill policy details method

  When('User enter the details', async function () {
   await registrationPage.addDetailsForPolicy();
  });
// Submit details method 

  Then('user click on submit', async function () {
    await registrationPage.submitPage();
  });

  Then('user should able to see the details',async function(){
await registrationPage.assertRegistrationSuccessMessage();
  });