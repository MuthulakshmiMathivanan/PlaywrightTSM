import { Page } from "@playwright/test";
import { assertURL, clickAndSendkeys, launchURL, toClick,sendkeys, assertText, waitSelector, sleep} from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";



// Web Inetraction methods for cyclos market place application

export class cyclosMarketPlacePage{
   // Locators for cyclos market place page
//Change all the locators into Private to implement Encapsulation
private PageLocators={
   marketPlaceButton:"//a[@id='menu_marketplace']",
   SearchTextbox:"//input[@type='text']",
   SelectItem:"(//*[@class='card-img-top'])[2]",
   VerifyItem:"//div[@class='title-text flex-grow-1 d-flex align-items-center']",
   markPayment:"//div[text()='Make payment']",
   enterAmount:"//*[@formcontrolname='amount']//input",
   paymentConfirmation:"//div[@class='content-title d-flex']//div",
   nextButton:"//*[@class='d-inline-block button']",
   confirmButton:"//*[@type='button']//span[text()='Confirm']"
}
   
    async MarketPlaceButton():Promise<any>{
      await toClick(this.PageLocators.marketPlaceButton);
     }

     async SearchButton():Promise<any>{
        // await toClick(PageLocators.marketPlaceButton);
        await sendkeys(this.PageLocators.SearchTextbox,"photo");
     }

    
    async SelectItem():Promise<any>{   
        await pageObject.page.locator(this.PageLocators.SelectItem).click();
     }

     async VerifyItem():Promise<any>{
        await assertText(this.PageLocators.VerifyItem," Matt photo store ");
     }

     async MakePaymentOption():Promise<any>{
        await toClick(this.PageLocators.markPayment);
     }

     async enterUserAmount():Promise<any>{
        await sendkeys(this.PageLocators.enterAmount,"100");
        console.log("Payment Completed")
     }

     async nextButton():Promise<any>{
        await pageObject.page.locator(this.PageLocators.nextButton).click();
        console.log("Payment Completed")
       }
  
    
       async paymentConfirm():Promise<any>{
          await assertText(this.PageLocators.paymentConfirmation," Payment confirmation ");
       }
       
       async confirmButton():Promise<any>{
          await toClick(this.PageLocators.confirmButton);
       }

}