import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText, takeScreenshot, assertURL, waitSelector } from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";

//Locators for Cyclos login Page
const PageLocators={
    usernameInputfield:"[formcontrolname='principal']",
    passwordInputField:"[type='password']",
    loginButton:"//*[text()='Submit']",
    payButton:"(//a[@class='quick-access-item'])[1]",
    userSelectionButton:"//*[@formcontrolname='subject']//button",
    userSelection:"//a[text()=' Demo one ']",
    amountField:"//*[@formcontrolname='amount']//input",
    paymentConfirmation:"//div[@class='content-title d-flex']//div",
    nextButton:"(//button)[3]",
    confirmButton:"//*[@type='button']//span[text()='Confirm']"
}
//Base class for all cyclos login page
// Web Interaction methods for cyclos login page



//It is a base class for all the login page
export class cyclosloginPage{
    //Locators for Cyclos login Page
    //Create a locators as a private to implement Encapsulation
   private PageLocators={
      usernameInputfield:"[formcontrolname='principal']",
      passwordInputField:"[type='password']",
      loginButton:"//*[text()='Submit']",
      invalidMessage:"//div[@class='notification-message']",
      pagetLogoText:"(//div[contains(text(),'Quick access')]", //check for Quick Access text inside Homepage after login
  }
  //Public methos to access all the locators and implement functionalities
 
  async navigate(URL:string):Promise<any>{  

        await launchURL(URL);
    }

    async enterUsername(username:string):Promise<any>{
        await clickAndSendkeys(this.PageLocators.usernameInputfield,username);
    }
    async enterPassword(password:string):Promise<any>{
        await clickAndSendkeys(this.PageLocators.passwordInputField,password);
    }
    async ClicklaunchButton():Promise<any>{
       await toClick(this.PageLocators.loginButton);
    }
    async invalidDatas(text:string):Promise<any>{
      await assertText(this.PageLocators.invalidMessage,text);
    }
     async VerifyHomePageText(text:string):Promise<any>{
      await assertText(this.PageLocators.pagetLogoText,text)
     }


}

   
