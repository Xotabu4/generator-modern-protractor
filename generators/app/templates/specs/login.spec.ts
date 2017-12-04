import { browser, element, by, ExpectedConditions, $, $$ } from 'protractor'
import { Login } from "../page_objects/login.page"
import matchers = require('jasmine-protractor-matchers')

describe('first login', function () {
    beforeEach( async function () {
        await new Login().open();
    });

    it( 'User is getting loged in', async function () {
        await expect(browser.getTitle()).toEqual('Project', 'Here is no Sign In page');
        const emailField = element(by.css('input[type=\'email\']'));
        const passwordField = $('input[type=\'password\']');

        await emailField.sendKeys('tylermac2030@gmail.com');
        await passwordField.sendKeys('Alexander2030');
        await browser.sleep(5000);

    });

    it( 'User GETIING ', async function () {
        await expect(browser.getTitle()).toEqual('Project', 'Her2333In page');
        const emailField = element(by.css('input[type=\'email\']'));
        const passwordField = $('input[type=\'password\']');

        await emailField.sendKeys('1111tylermac2030@gmail.com');
        await passwordField.sendKeys('212Alexander2030');
        await browser.sleep(5000);

    });
});