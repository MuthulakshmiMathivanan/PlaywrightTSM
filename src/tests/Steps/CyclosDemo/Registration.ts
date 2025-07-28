import { Given,When,Then } from "@cucumber/cucumber";
import { pageObject } from "../../Hooks/PageObjects";
import { RegistrationPage} from "../../Pages/CyclosWebsite/cyclosRegistration/RegistrationPage";
import { assert } from "console";

let Register:RegistrationPage;

// Navigate method for launching Registration page

Given('User Launch the URL', async function () {
  Register=new RegistrationPage();
    await Register.navigate();
  });

// Click Method for registeration

  When('Click on Register link', async function () {
   await Register.clickRegisterButton();
  });

// Method for filling mandatory details

  Given('Enter {string} {string} {string} mandatory details', async function (username,loginname,emailid) {
    await Register.enterMandatoryDetails(username,loginname,emailid);
  });

// Method for clicking next and confirmation in registration page 

  Given('Click Next and confirm', async function () {
   await Register.clickNextButton();
   console.log("Next Page");
  });


  //emter password
  Given('add Password field', async function () {
   await Register.passwordField();
  });

  //Steps for validating error messages
  Given('Click Next without entering the details and Validate the message', async function () {
  await Register.clickNextButton();
  await Register.fieldValidate();
  });

// Method for validating text in registration page 

  Given('Verify the Registration page', async function () {
   await Register.comparePage();
   console.log("Registeration Completed");
   });

