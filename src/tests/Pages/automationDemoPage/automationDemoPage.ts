import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText, takeScreenshot } from "../../Helper/Actions";


export class automationDemoPage{
    //Change all the locators into private to implement Inheritance
    private PageLocators = {
        firstName:"[placeholder='First Name']",
        lastName:"[placeholder='Last Name']",
        Adress:"//textarea",
        emailField:"//input[@type='email']",
        Phone:"//input[@type='tel']",
        uploadFile:"#imagesrc",
        
    }
  
    // Web interaction methods for Automation demo login page

    async navigate():Promise<any>{  
        await launchURL("https://demo.automationtesting.in/Register.html");
    }
    async enterFirstName(firstName:string):Promise<any>{
        await clickAndSendkeys(this.PageLocators.firstName,firstName);
    }
    async enterLastName(lastName:string):Promise<any>{
        await clickAndSendkeys(this.PageLocators.lastName,lastName);
    }
    async enterContactDetails():Promise<any>{
        await clickAndSendkeys(this.PageLocators.Adress,"Chennai")
        await clickAndSendkeys(this.PageLocators.emailField,"Magesh@208gmail.com");
        await clickAndSendkeys(this.PageLocators.Phone,"7868798798");
    }
    async enterGenderDetails(GenderType:string):Promise<any>{
        await toClick(`//input[@value='${GenderType}']`)
    }
   async validateFile():Promise<any>{
    console.log("need to validate the file ");
   }
   async enterEmailAddress(email:string){
        await clickAndSendkeys(this.PageLocators.emailField,email);
   }
   async ValiadateEmail(){
        console.log("Cant able to validate this page...")
   }

}