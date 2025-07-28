import { Before,BeforeAll,AfterAll,After, setDefaultTimeout, Status} from "@cucumber/cucumber";
import {chromium,Browser,Page, BrowserContext} from "@playwright/test"
import { pageObject } from "../Hooks/PageObjects"
import { logger } from "../Helper/logger";


let browser:Browser;
let pages:Page;

Before(async function(){ 
    browser=await chromium.launch({headless:false});
    setDefaultTimeout:  60 * 1000 
    const context=await browser.newContext();
    pages=await context.newPage();
    pageObject.page=pages;
});
After(async function(scenario) {
    if(scenario.result?.status==Status.FAILED){
       // setDefaultTimeout(2000);
        const img=await pageObject.page.screenshot({path:`./test-results/Screenshots/${scenario.pickle.name}`,type:"png"});
        await this.attach(img,"image/png");
    }
   logger.info("Browser are closed");
    //await  pageObject.page.close();
    await browser.close();
   
//    context.close();
});

