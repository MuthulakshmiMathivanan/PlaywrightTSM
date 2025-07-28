import { pageObject } from "../Hooks/PageObjects";
import { expect, selectors } from "@playwright/test";
import { execFile } from "child_process";
 let arr:string[]=[];
export async function launchURL(URL:string){
    await pageObject.page.goto(URL);
    pageObject.page
}
export async function toClick(Webelement:string){
    await pageObject.page.locator(Webelement).click();
}
export async function sendkeys(Webelement:string,text:string){
    await pageObject.page.locator(Webelement).fill(text);
}
export async function clickAndSendkeys(Webelement:string,text:any){
    await pageObject.page.locator(Webelement).click();
    await pageObject.page.locator(Webelement).fill(text);
}
export async function Fill(Webelement:string,text:string){
    await pageObject.page.fill(Webelement,text);
}
export async function Click(Webelement:string){
    await pageObject.page.click(Webelement);
}

export async function select(Webelement:string,text:string){
    await pageObject.page.click(Webelement);
    const option=await pageObject.page.$(Webelement);
  await option?.selectOption(text)
    await pageObject.page.selectOption(Webelement,text);
}

export async function doubleClick(Webelement:string){
    await pageObject.page.dblclick(Webelement);
}
export async function Tab(Webelement:string){
    await pageObject.page.tap(Webelement);
}
export async function mouceClick(x:number,y:number){
    await pageObject.page.mouse.click(x,y);
}
export async function moucedoubleClick(x:number,y:number){
    await pageObject.page.mouse.dblclick(x, y);
}
export async function mousedown(){
    await pageObject.page.mouse.down();
}
export async function sleep(time:number){
 pageObject.page.waitForTimeout(time);
}
export async function assertURL(URL:string){
    const url = pageObject.page.url();
    expect(url).toBe(URL);
}
export async function waitSelector(Webelement:string){
    await pageObject.page.waitForSelector(Webelement);
}

export async function dropDownValidate(Webelement:string,options:string){
    await pageObject.page.selectOption(Webelement,options);
}

export async function takeScreenshot(name:string){
    await pageObject.page.screenshot({path:"test-results/Screenshots/"+Date.now()+name+".png"});
}

export async function statusCode(response:any,code:number) {
   if(response.status()==code){
    console.log(`Response status code is ${code}`);
   }
}

export async function responseData(response:any){
     console.log(await response.text());
}

export  async function responseJSON(response:any):Promise<string|undefined>{
   //  console.log( await response.json());
   
     const jsonResponse=await response.json();
   
     if (Array.isArray(jsonResponse) && jsonResponse.length > 0) {
        // Check if the last object has an _id property
        const lastItem = jsonResponse[jsonResponse.length - 1];
        if (lastItem && lastItem._id) {
            const id = lastItem._id; // Accessing the last object's _id
            console.log('Fetched ID:', id);
            return id; // Return the fetched ID
        }else {
            console.error('No _id property found in the last item:', lastItem);
            return undefined; // Return undefined if no valid ID is found
        }
    }else {
        console.error('No data available in response or incorrect format:', jsonResponse);
        return undefined;
    }
 
}

export async function responseURL(response:any){
    console.log(await response.url());
}

export async function responseRequest(response:any){
    console.log(await response.request());
}

export async function responseHeaders(response:any){
    console.log(await response.headers());
}

export async function assertText(Webelement:string,text:string){
    await expect(pageObject.page.locator(Webelement)).toHaveText(text);
   
}

export async function assertTextDisable(Webelement:string,text:any){
    await expect(pageObject.page.locator(Webelement)).not.toContainText(text);
   
}

export async function cookieVerification(){
    const cookies=await pageObject.page.context().cookies();
    console.log(`Cookies present in the page are :`+JSON.stringify(cookies, null, 2))
  }

export async function setCookies(dataForCookie:any){
    await pageObject.page.context().addCookies(dataForCookie)
  }

export async function mouseHoverClick(Webelement:string){
    const locator=pageObject.page.locator(Webelement);
    await locator.hover();
    await locator.click();
  }
  export async function fileUpload(filepath:string){
    execFile(filepath, (error:any, stdout:any, stderr:any) => {
        if (error) {
            console.error(`Error executing AutoIt script: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}-File upload successfully`);
    });
  }