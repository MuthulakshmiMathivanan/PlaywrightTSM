import { Given,Then,When } from "@cucumber/cucumber";
import { PaymentValidation } from "../../Pages/CyclosWebsite/PaymentValidationPage/PaymentValidationPage";

let CyclosPaymentValidation:PaymentValidation

// Methods for payment validation in cyclos payment validation page 

Given('Click the user payment option', async function () {
    CyclosPaymentValidation=new PaymentValidation();
    await CyclosPaymentValidation.ClickPayUserButton();
  });

  Given('I perform the user payment', async function () {

    await CyclosPaymentValidation.ClickUserSelectionButton();
    await CyclosPaymentValidation.ClickUserSelection();
    await CyclosPaymentValidation.enterUserAmount();
    await CyclosPaymentValidation.nextButton(); 
    await CyclosPaymentValidation.paymentConfirm();

  });

  Given('I click the confirm button', async function () {
       await CyclosPaymentValidation.confirmButton(); 
  });

  Then('I validate the payment', async function () {
    await CyclosPaymentValidation.validatePayment();
  });