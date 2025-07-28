import { Given ,When} from "@cucumber/cucumber";
import { pageObject } from "../../Hooks/PageObjects";
import {execFile} from "child_process"
import { upload } from "../../Pages/FileUpload/uploadFile";
import { fileUpload, sleep } from "../../Helper/Actions";
let req:upload;
Given('Launch Github in browser', async function () {
  req=new upload(pageObject.page);
  await req.LaunchURL("https://www.filemail.com/share/upload-file");
  });
  When('click Upload link', async function () {
    await req.clickFileShareLink();
  });
  When('upload file from desktop', async function () {
     await fileUpload("C:\\Users\\VDI007\\Desktop\\FileUploadScript.exe");
  });