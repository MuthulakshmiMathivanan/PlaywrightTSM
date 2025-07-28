import { expect, Page } from "@playwright/test";
import { assertText, assertURL, clickAndSendkeys, launchURL, toClick } from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";



// Web interaction methods for Product checkin page

export class productCheckingPage{
    // Locators for assert validation page
//Change all the locators into private to implement Encapsulation
private PageLocators={
    selectItem:"(//*[@class='inventory_item_name'])[1]",
    firstProduct:"(//button[@class='btn_primary btn_inventory'])[1]",
    secondProduct:"(//button[@class='btn_primary btn_inventory'])[2]",
    thirdProduct:"(//button[@class='btn_primary btn_inventory'])[3]",
    checkoutCart:"//a[@class='shopping_cart_link fa-layers fa-fw']", 
    checkoutButton:"//a[@class='btn_action checkout_button']",
    firstName:"//input[@id='first-name']",
    lastName:"//input[@id='last-name']",
    postcode:"//input[@id='postal-code']",
    continue:"//input[@class='btn_primary cart_button']",
    finish:"//a[@class='btn_action cart_button']",
    compareCartValue:"//div[@class='summary_subtotal_label' and contains(text(), 'Item total:')]",
    confirmationMessage:"//h2[text()='THANK YOU FOR YOUR ORDER']"
}
    
    //public Methods for implement functionalities
    async inventoryURL():Promise<any>{
       await launchURL("https://www.saucedemo.com/v1/inventory.html")
    }

    async addFirstProduct():Promise<any>{
        await toClick(this.PageLocators.firstProduct);
    }

    async addSecondProduct()
    {
        await toClick(this.PageLocators.secondProduct);
    }

    async addThirdProduct()
    {
        await toClick(this.PageLocators.thirdProduct);
    }

    async checkout()
    {
        await toClick(this.PageLocators.checkoutCart);
        await toClick(this.PageLocators.checkoutButton);
    }
    async Details()
    {
        await clickAndSendkeys(this.PageLocators.firstName,"sample");
        await clickAndSendkeys(this.PageLocators.lastName,"demo");
        await clickAndSendkeys(this.PageLocators.postcode,"123456");
        await toClick(this.PageLocators.continue);
      
    }
    async finalValidation()
    {
        await assertText(this.PageLocators.compareCartValue,"Item total: $53.97");
        await toClick(this.PageLocators.finish);
        await assertText(this.PageLocators.confirmationMessage,"THANK YOU FOR YOUR ORDER");
    }
}