import { Given,Then,When } from "@cucumber/cucumber";
import { cyclosMarketPlacePage } from "../../Pages/CyclosWebsite/cyclosMarketPlace/cyclosMarketPlacePage";
import { pageObject } from "../../Hooks/PageObjects";
let Cyclosmarketplacepage:cyclosMarketPlacePage;


const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000); // 60 seconds

// Method for navigate to cyclos market place page

Given('I navigate to the marketplace', async function () {
  Cyclosmarketplacepage=new cyclosMarketPlacePage();
    await Cyclosmarketplacepage.MarketPlaceButton();
  });

// Method for products selection in cyclos market place page 

  Given('I select the item from marketplace', async function () {
    await Cyclosmarketplacepage.SearchButton();
    await Cyclosmarketplacepage.SelectItem();
    await Cyclosmarketplacepage.VerifyItem();
});

// Method for performing payment in cyclos market place page

Given('I perform the payment', async function () {
  await Cyclosmarketplacepage.MakePaymentOption;
});

// Method for payment confirmation in cyclos market place page

Given('I enter the amount for the item', async function () {
  await Cyclosmarketplacepage.enterUserAmount;
  await Cyclosmarketplacepage.nextButton;
  await Cyclosmarketplacepage.paymentConfirm;
});

// Method for clicking confirm button in cyclos market place page

Given('I confirm the payment', async function () {
  await Cyclosmarketplacepage.confirmButton;
});