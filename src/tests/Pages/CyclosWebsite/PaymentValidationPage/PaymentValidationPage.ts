import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText, takeScreenshot, assertURL, waitSelector } from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";

export class PaymentValidation{
//Change all the locators into private to implement Encapsulation
    private PageLocators={
        payButton:"(//a[@class='quick-access-item'])[1]",
        userSelectionButton:"//*[@formcontrolname='subject']//button",
        userSelection:"//a[text()=' Car repair ']",
        amountField:"//*[@formcontrolname='amount']//input",
        paymentConfirmation:"//div[@class='content-title d-flex']//div",
        nextButton:"(//button)[3]",
        confirmButton:"//*[@type='button']//span[text()='Confirm']"
    }
    //public methods to implement functionalities
  
    async ClickPayUserButton():Promise<any>{

      await toClick(this.PageLocators.payButton);
     }
    
     async ClickUserSelectionButton():Promise<any>{
        await toClick(this.PageLocators.userSelectionButton);
     }
    
     async ClickUserSelection():Promise<any>{
        await toClick(this.PageLocators.userSelection);
     }
    
     async enterUserAmount():Promise<any>{
        await sendkeys(this.PageLocators.amountField,"100");
     }
    
     async nextButton():Promise<any>{
      await pageObject.page.locator(this.PageLocators.nextButton).click();
     }
    
     async paymentConfirm():Promise<any>{
        await assertText(this.PageLocators.paymentConfirmation," Payment confirmation ");
     }
     
     async confirmButton():Promise<any>{
        await toClick(this.PageLocators.confirmButton);
     }
    
     async validatePayment():Promise<any>{
         await takeScreenshot("Validate Payment");
     }
    
}

