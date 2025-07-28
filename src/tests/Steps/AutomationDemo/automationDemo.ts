import { Given,Then,When } from "@cucumber/cucumber";
import { automationDemoPage } from "../../Pages/automationDemoPage/automationDemoPage";
import { pageObject } from "../../Hooks/PageObjects";

let demoPage:automationDemoPage;
let demoPage1:automationDemoPage;
// Launch application method
Given('User Launch the automation demo site', async function () {
    demoPage = new automationDemoPage()
    await demoPage.navigate();
  });

// Fill Mandatory details method 
  Given('fill the mandatory details {string} and {string}' , async function (firstName:string,lastName:string) {
    await demoPage.enterFirstName(firstName);
    await demoPage.enterLastName(lastName)
  }); 

  Given('upload an file in the portal', async function () {
    
  });
  Given('Fill the address details,Email,and phone Number fileds', async function () {
    await demoPage.enterContactDetails();
  });
  Given('Enter the Gender details as {string}', async function (GenderType:string) {
    await demoPage.enterGenderDetails(GenderType);
  });

  Then('Validate the file is uploaded or not', async function () {
    await demoPage.validateFile();
  });

  Given('User enters the email address as {string}', async function (email:string) {
    demoPage1 = new automationDemoPage();
    await demoPage1.enterEmailAddress(email);
  });
  Then('Validate whether the email is correct or not', async function () {
    await demoPage1.ValiadateEmail();
  });