const { Given, When, Then } = require('@wdio/cucumber-framework');
//import { expect, $ } from '@wdio/globals'

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

//const pages = {
//    login: LoginPage
//}
//Given(/^I am on the (\w+) page$/, async (page) => {
//    await pages[page].open()
//});
//When(/^I login with (\w+) and (.+)$/, async (username, password) => {
 //   await LoginPage.login(username, password)
//});
//Then(/^I should see a flash message saying (.*)$/, async (message) => {
 //   await expect(SecurePage.flashAlert).toBeExisting();
 //   await expect(SecurePage.flashAlert).toHaveTextContaining(message);
//});

Given(/^YudhisThiro is on the login page$/, async () => {
    await loginPage.open()
})

When(/^YudhisThiro login with "standart_user" credential$/, async () => {
    await LoginPage.login(username)
})

Then(/^YudhisThiro is on the login page$/, async () => {
    await HomePage.validateHomePage()
})

Then(/^YudhisThiro should see error "(.*)"$/, async (message) => {
    await LoginPage.validateLockedOutUserError(message)
})





