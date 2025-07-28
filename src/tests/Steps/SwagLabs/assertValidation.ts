import { Given,Then,When } from "@cucumber/cucumber";
import { productCheckingPage } from "../../Pages/SwagLabsWebsite/assertValidationPage/assertValidationPage";
import { pageObject } from "../../Hooks/PageObjects";
import { expect } from "@playwright/test";
let Checking:productCheckingPage;

Checking = new productCheckingPage();
Given('Add first product to chart', async function () {
   await Checking.addFirstProduct();
   await pageObject.page.mouse.wheel(0, -100);
  });

  Then('second product to chart', async function () {
    await Checking.addSecondProduct();
  });

  Then('third product to chart', async function () {
    await Checking.addThirdProduct();
  });

  Then('Enter the checkout Information', async function () {
    await Checking.checkout();
    await Checking.Details();
  });

  Then('validate the final Premium', async function () {
   await Checking.finalValidation();
  });