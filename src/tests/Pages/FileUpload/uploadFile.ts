import { Page } from "@playwright/test";
import { launchURL, toClick } from "../../Helper/Actions";

// Web interaction methods for launch url and add files

export class upload{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async LaunchURL(URL:string):Promise<any>{
        await launchURL(URL);
     }
     async clickFileShareLink():Promise<any>{
        await toClick("//span[text()='Add Files']");
     }
}