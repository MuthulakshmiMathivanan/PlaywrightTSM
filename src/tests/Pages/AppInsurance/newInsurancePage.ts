import {  assertText, assertTextDisable, clickAndSendkeys, launchURL, select, toClick  } from "../../Helper/Actions";

// Locators for app insurance application
const PageLocators = {
    userName:"//input[@id='username']",
    password:"//input[@id='Password']",
    submit:"//button[normalize-space()='Submit']",
    newInsurance:"//a[@href='/insurance']",
    insurerName:"//input[@id='Name']",
    insurerEmail:"//input[@id='email']",
    insurerAddress:"//input[@id='Address']",
    insurerDateofBirth:"//input[@id='DateOfBirth']",
    insurerGenderFemale:"//input[@value='Female']",
    insurerGendermale:"//input[@value='Male']",
    policyType1:"//input[@value='Life Insurance ']",
    policyType2:"//input[@value='Health Insurance ']",
    policyType3:"//input[@value='Vehicle Insurance ']",
    sumInsured:"//select[@name='SumInsured']",
    premium:"//input[@id='Premium']",
    submitPolicy:"//button[normalize-space()='Submit']",
    policyConfirmation:"//p[text()='Insurance policy created successfully.']",
    nameFieldMessage:"//p[text()='*Name is required']",
    emailFieldMessage:"//p[text()='*Email is required']",
    addressFieldMessage:"//p[text()='*Address is required']",
    dobFieldMessgage:"//p[text()='*Date of Birth is required']",
    genderFieldMessage:"//p[text()='*Gender is required']",
    policyTypeMessgae:"//p[text()='*Please select at least one Policy Type']",
    SumInsuredFieldMessage:"//p[text()='*Please select Sum Insured']",
    premiumFieldMessage:"//p[text()='*Premium is required']"
}

export class newInsurance{
  
    //Interaction methods for App insurance - Login Page
async navigate():Promise<any>{  
    let url="http://192.168.99.141:3000/";
    launchURL(url);
}

//Login Page steps
async loginPage(username:string,password:string)
{
    await clickAndSendkeys(PageLocators.userName,username);
    await clickAndSendkeys(PageLocators.password,password);
    await toClick(PageLocators.submit);
}

// Entering Username
async entername(username:string){
    await clickAndSendkeys(PageLocators.insurerName,username);
}

// Entering Email
async enterEmail(email:string){
    await clickAndSendkeys(PageLocators.insurerEmail,email);
}

// Entering Address
async enterAddress(address:string){
    await clickAndSendkeys(PageLocators.insurerAddress,address);
}

// Entering Date of Birth
async enterdob(dob:string){
    await clickAndSendkeys(PageLocators.insurerDateofBirth,dob);
}

// Selecting Gender
async entergender(gender:string){
    await clickAndSendkeys(PageLocators.insurerGendermale,gender);
}

//Selecting PolicyType
async enterpolicyType(policyType:string){
    await clickAndSendkeys(PageLocators.policyType3,policyType);
}

//Select SumInsured Value
async enterSumInsured(sumInsured:string){
    await clickAndSendkeys(PageLocators.sumInsured,sumInsured);
}

//Entering Premium Value
async enterPremium(premium:string){
    await clickAndSendkeys(PageLocators.premium,premium);
}

//Clicking New Insurance
async clickNewInsurance()
{
  await toClick(PageLocators.newInsurance);
}

//Entering the details to create Policy
async enterDetails(firsteName:string,dob:Date,gender:string,policytype:string,sumInsured:any)
{
    const randomFigures = Math.random().toString();
    const email = randomFigures.substr(2) + '@email.com';

    await clickAndSendkeys(PageLocators.insurerName,firsteName);
    await clickAndSendkeys(PageLocators.insurerEmail,email);
    await clickAndSendkeys(PageLocators.insurerAddress,"Chennai");
    await clickAndSendkeys(PageLocators.insurerDateofBirth,dob);
    await clickAndSendkeys(PageLocators.premium,"1000");
    await select(PageLocators.sumInsured,sumInsured);
  
    //Condition for selecting Gender while creating policy
if(gender=="Female")
{
    await toClick(PageLocators.insurerGenderFemale);
}
else
{
    await toClick(PageLocators.insurerGendermale);
}

//Condition for Selecting Policy Type while creating Policy
if(policytype=="Life Insurance")
{
    await toClick(PageLocators.policyType1);
}
else if(policytype=="Health Insurance")
{
    await toClick(PageLocators.policyType2);
}
else
{
    await toClick(PageLocators.policyType3);
}
}

//Submit the policy
async submit()
{
    await toClick(PageLocators.submitPolicy);
}

//Asserting Policy created Successful message
async assertPolicyCreated()
{
    await assertText(PageLocators.policyConfirmation,"Insurance policy created successfully.");
}

async fieldValidation()
{
    await assertText(PageLocators.nameFieldMessage,"*Name is required");
    await assertText(PageLocators.emailFieldMessage,"*Email is required");
    await assertText(PageLocators.addressFieldMessage,"*Address is required");
    await assertText(PageLocators.dobFieldMessgage,"*Date of Birth is required");
    await assertText(PageLocators.genderFieldMessage,"*Gender is required");
    await assertText(PageLocators.policyTypeMessgae,"*Please select at least one Policy Type");
    await assertText(PageLocators.SumInsuredFieldMessage,"*Please select Sum Insured");
    await assertText(PageLocators.premiumFieldMessage,"*Premium is required");
}

async assertTextDisableName(fieldname:any)
{
     await assertTextDisable(PageLocators.nameFieldMessage,"*Name is required");
}

async assertTextDisableEmail()
{
     await assertTextDisable(PageLocators.emailFieldMessage,"*Email is required");
}
}
