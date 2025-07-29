import { Given,Then,When } from "@cucumber/cucumber";
import { loginPage } from "../../Pages/SwagLabsWebsite/loginPage/loginPage";
import { pageObject } from "../../Hooks/PageObjects";
import { cyclosloginPage } from "../../Pages/CyclosWebsite/cyclosLoginPage/cyclosLoginPage";
let Loginpage:loginPage;
let swagLogin:cyclosloginPage;

  Given('User navigate to the login page with {string}', async function (URL:string) {
   // swagLogin=new cyclosloginPage();
    Loginpage=new loginPage();
     Loginpage.navigate(URL);
     //await this.page.screenshot({ path: 'screenshots/example.png', fullPage: true });
  });
  When('Enter the username and password as {string} and {string}', async function (username, password) {
    await Loginpage.enterUsername(username);
    await Loginpage.enterPassword(password);
  });
  When('Click the submit button', async function () {
    await Loginpage.ClicklaunchButton();
  });

  Then('Verify {string} the Home page', async function (value:string) {
   await Loginpage.verifyHomePageURL(value);
  });