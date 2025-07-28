import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText,assertURL, mouceClick, Fill } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects";



export class vocherPage{

    // Locators for cyclos vocher page
//change locatars into private to implement encapsulation
private PageLocators={
    dashboard:"//div[text()='Dashboard']",
    userName:"//input[@placeholder='User']",
    passWord:"//input[@placeholder='Password']",
    submit:"//button[@id='reloadButton']",
    vocherButton:"//div[text()=' My vouchers ']",
    VocherPageValidation:"//div[text()=' Search vouchers ']",
    buyVochers:"//div[text()='Buy vouchers']",
    giftVocherRestaurant:"//a[text()=' Restaurant voucher ']",
    giftVocherCinema:"//a[text()=' Cinema voucher ']",
    giftVocherGift:"//a[text()=' Gift voucher ']",
    cyclosLogo:"//div[text()='Cyclos']",
    giftVocherAmountText:"//input[@placeholder='0,00']",
    giftVocherText:"//div[contains(text(),' Restaurant voucher')]",
    giftVocherCheckbox:"//label[contains(text(),'voucher is a gift')]",
    giftVocherNextButton:"//span[text()='Next']",
    giftConfirmationText:"//div[text()=' Buy confirmation ']",
    giftAmountText:"(//div[@class='d-flex label-value-value'])[2]" ,
    giftVocherStatus:"//div[text()='Open']",
    confirm:"//span[text()='Confirm']",
    errorMessage:"//div[text()='The current user exceeds the maximum allowed open amount of 500.00 for vouchers of this type. The current open amount is 500.00.']"
}
  
// Web interaction methods for vocher page

    async ClickdashboardButton():Promise<any>{
        await toClick(this.PageLocators.dashboard);
    }

    async comparePage():Promise<any>{
        await assertText(this.PageLocators.cyclosLogo,"Cyclos");
    }

    async clickVocherButton():Promise<any>{
        await toClick(this.PageLocators.vocherButton);
        await assertText(this.PageLocators.VocherPageValidation,"Search vouchers");
    }

    async gotoGiftVocher(vocherType:any):Promise<any>
    {
        await toClick(this.PageLocators.buyVochers);

        //If condition for selecting Vochertype : Available vocher -cinema,Restaurant,Gift
        if(vocherType=="Restaurant")
        {
            await toClick(this.PageLocators.giftVocherRestaurant);
        }
        else if(vocherType=="Gift")
        {
            await toClick(this.PageLocators.giftVocherGift);
        }
        else
        {
            await toClick(this.PageLocators.giftVocherCinema);
        }
    }

    async verifyHomePageURL():Promise<any>{
        const homePageUrl:string="https://demo.cyclos.org/ui/dashboard";
        await assertURL(homePageUrl);
    }

    async giftVocherAmount(amount:any):Promise<any>{
        await toClick(this.PageLocators.giftVocherAmountText);
        await sendkeys(this.PageLocators.giftVocherAmountText,amount);
        await toClick(this.PageLocators.giftVocherCheckbox);
    }

    async giftVocherNext():Promise<any>
    {
        await toClick(this.PageLocators.giftVocherNextButton);
    }

    async validateGiftVocher():Promise<any>{
        await assertText(this.PageLocators.giftVocherText,"Restaurant voucher");
        await assertText(this.PageLocators.giftAmountText,"0,10 IU's");
    }
    
    async ConfirmationText():Promise<any>{
        await assertText(this.PageLocators.giftConfirmationText,"Buy confirmation");
        await toClick(this.PageLocators.confirm);
    }

    async assertGiftVocherPage():Promise<any>{
       await assertText(this.PageLocators.giftVocherStatus,"Open");
    }

    async asserterrorMessage():Promise<any>{
        await assertText(this.PageLocators.errorMessage,"The current user exceeds the maximum allowed open amount of 500.00 for vouchers of this type. The current open amount is 500.00.");
     }
};