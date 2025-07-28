import {  expect, Page,Dialog } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , assertURL, assertText, takeScreenshot, select, sleep } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects";

type DialogHandler = (dialog: Dialog) => Promise<void>;




export class ManagerLogin{
// Locators for Manger login web page
//Change all the locators into private to implement Inheritance
    private PageLocators = {
        bankManagerLogin:"//button[@ng-click='manager()']",
        addCustomer:"//button[@ng-click='addCust()']",
        selectCustomer:"//select[@id='userSelect']",
        selectCurrency:"//select[@id='currency']",
        openCustomer:"//button[@ng-click='openAccount()']",
        process:"//button[@type='submit']",
        firtName:"//input[@ng-model='fName']",
        lastName:"//input[@ng-model='lName']",
        postCode:"//input[@ng-model='postCd']",
        addDetails:"//button[text()='Add Customer']",
        home:"//button[text()='Home']"
    }
   
    // Web interaction methods for manager login page

    async navigate():Promise<any>{  
        let url="https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login";
        await launchURL(url);
        await assertURL(url);
    }

    async clickManager()
    {
        await(toClick(this.PageLocators.bankManagerLogin));
    }

    async fillDetails()
    {
     let fname:string="admin"+Date.now();
        await(toClick(this.PageLocators.addCustomer));
        await(clickAndSendkeys(this.PageLocators.firtName,fname));
        await(clickAndSendkeys(this.PageLocators.lastName,"sam"));
        await(clickAndSendkeys(this.PageLocators.postCode,"600001"));
        expect(this.PageLocators.home,"Home");
        console.log(fname)

        await(toClick(this.PageLocators.addDetails)); 
      
        pageObject.page.on('dialog', async dialog => {     // Check if the dialog type is 'alert'
            if (dialog.type() === 'alert') {   
                   console.log('Alert message:', dialog.message());          
                      // Dismiss the alertawait dialog.dismiss(); // Alternatively, you can accept the alert// 
                      await dialog.accept(); 
                    }
                    expect(this.PageLocators.openCustomer,"Open Account");
                 });
}


async openCustomer()
{
    await (toClick(this.PageLocators.openCustomer));
   // await (toClick(PageLocators.selectCustomer));
  
    await select(this.PageLocators.selectCustomer,"2");
    await select(this.PageLocators.selectCurrency,"Pound");

    await toClick(this.PageLocators.process);
}
}