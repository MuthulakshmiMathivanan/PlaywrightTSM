import { Given,Then,When } from "@cucumber/cucumber";
import { cyclosloginPage } from "../../Pages/CyclosWebsite/cyclosLoginPage/cyclosLoginPage";
import { pageObject } from "../../Hooks/PageObjects";
let Cyclosloginpage:cyclosloginPage;


const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000); // 60 seconds

 // Navigate login page method for cyclo login page

  Given('User navigate to login page with {string}', async function (Url:string) {
    Cyclosloginpage=new cyclosloginPage();
  
  });
  
  // Fill login crdentials method for cyclos login page
  
  Given('Enter the username and password {string} and {string}', async function (username, password) {
    await Cyclosloginpage.enterUsername(username);
    await Cyclosloginpage.enterPassword(password);
  });
  
  // Launch cyclos login page method 

  Given('Click the login submit button', async function () {
    await Cyclosloginpage.ClicklaunchButton();
  });

  // Method for verify text in cyclos home page 

  Given('Verify the Home page title as {string}',async function(text:string){
    await Cyclosloginpage.VerifyHomePageText(text);
  })

  // Verify invalid datas in cyclos login page

  Given('Verify the Invalid message as {string}',async function(assertText:string){
    await Cyclosloginpage.invalidDatas(assertText);
  })