import { Given,When,Then } from "@cucumber/cucumber";
import { pageObject } from "../../Hooks/PageObjects";
import { addProducts } from "../../Pages/SwagLabsWebsite/selectProductWithoutFilterPage/selectProductWithoutFilterPage";
let Products:addProducts;
       
         Given('Select min or max price product and click add to cart button value {string}', async function (string) {
          Products=new addProducts();
          if(string=="MIN"){
            await Products.minPriceProduct();
          }
          else{
            await Products.maxPriceProduct();
          }
          
          
         });

         When('verify the MyCart page URL', async function () {
            Products=new addProducts();
            await Products.verifyMyCartPageURL();
         });

         When('verify two of the products in MyCart and click checkout button', async function () {
            await Products.verifyMycartProductItems();
            await Products.clickCheckoutButton();
         });


         When('verify the checkout page URL', async function () {
            await Products.verifyCheckoutPageURL();
         });


         When('User enter checkout information and click continue button', async function () {
            await Products.checkoutInformation();
         });


         When('verify the overview page URL', async function () {
            await Products.overviewPageURL();
         });

         When('Verify paying and shipping information in overview page', async function () {
            await Products.paymentInformation();
         });
         When('Click Finish button to confirm your order', async function () {
            await Products.clickFinishButton();
         });


         When('Verify the checkout-complete page URL', async function () {
            await Products.verifyCheckoutCompletePage();
         });

         Then('User take final order confirmation screenshot', async function () {
            await Products.FinalScreenshot();
         });