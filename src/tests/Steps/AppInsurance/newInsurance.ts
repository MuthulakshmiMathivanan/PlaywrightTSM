import { Given,Then,When } from "@cucumber/cucumber";
import { newInsurance } from "../../Pages/AppInsurance/newInsurancePage";
import { pageObject } from "../../Hooks/PageObjects";
import { assertText, assertTextDisable, assertURL, sendkeys } from "../../Helper/Actions";
import { send } from "process";

let newInsurancePage:newInsurance;

Given('User launch the application', async function () {
    newInsurancePage = new newInsurance()
    await newInsurancePage.navigate();
        
});

 When('user entering {string} and {string}', async function (Username:string, password:string) {
     await newInsurancePage.loginPage(Username,password)
});

When('user click on New Insurance link', async function () {
     await newInsurancePage.clickNewInsurance();      
});

When('User enters the personal detail {string} {string} {string} {string} {string}', async function (firsteName:string,dob:Date,gender:string,policytype:string,sumInsured:any) {
    await newInsurancePage.enterDetails(firsteName,dob,gender,policytype,sumInsured);
  });

  Then('Submit the details', async function () {
     await newInsurancePage.submit();
});

Then('check whether policy is created', async function () {
    await newInsurancePage.assertPolicyCreated();
});

When('click on submit button without entering the details', async function () {
    await newInsurancePage.submit();
  });

  When('user should validate the error message', async function () {
    await newInsurancePage.fieldValidation();
  });