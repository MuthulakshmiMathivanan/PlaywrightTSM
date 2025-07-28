import { Page } from "@playwright/test";
import { assertText, assertURL, clickAndSendkeys, launchURL, toClick } from "../../../Helper/Actions";
import { cyclosloginPage } from "../../CyclosWebsite/cyclosLoginPage/cyclosLoginPage";

const PageLocators={
    usernameInputfield:"//input[@id='user-name']",
    passwordInputField:"//input[@id='password']",
    loginButton:"//input[@id='login-button']",
    errorLoginMessgae:"//h3[contains(text(),'Epic sadface:')]"
}
//Implement inheritance in this sub class
export class loginPage extends cyclosloginPage{
  //overrride method
    async navigate(URL: string):Promise<any> {
        await launchURL(URL);
    }
    //overrride method
    async enterUsername(username: string): Promise<any> {
        await clickAndSendkeys(PageLocators.usernameInputfield,username);
    }
    //override method
    async enterPassword(password: string): Promise<any> {
        await clickAndSendkeys(PageLocators.passwordInputField,password);
    }
    //override method
    async ClicklaunchButton(): Promise<any> {
        await toClick(PageLocators.loginButton);
    }
    
    async verifyHomePageURL(value:string):Promise<any>{

        if(value=="Yes")
        {
        const homePageUrl:string="https://www.saucedemo.com/v1/inventory.html";
        await assertURL(homePageUrl);
        }
        else
        {  
            const errorloginUrl:string="https://www.saucedemo.com/v1/";
            await assertURL(errorloginUrl);
        }
    }
}
   
