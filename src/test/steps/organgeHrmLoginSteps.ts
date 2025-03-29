import {Given, When, Then} from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import {expect} from '@playwright/test'

Given('user is on the organgehrm login page', async function () {
    await pageFixture.page.goto("https://opensource-demo.orangehrmlive.com/");
});

// When('user enters valid username {string}', async function (username:string) {
//     await pageFixture.page.locator('[name="username"]').fill(username);
// });

// When('user enters valid password {string}', async function (password:string) {
//     await pageFixture.page.locator('//input[@placeholder="Password"]').fill(password);
// });

When('user enters valid username', async function () {
    await pageFixture.page.locator('[name="username"]').fill('Admin');
});

When('user enters valid password', async function () {
    await pageFixture.page.locator('//input[@placeholder="Password"]').fill('admin123');
});

When('user clicks on the login button', async function () {
    await pageFixture.page.locator('[type="submit"]').click();
});

Then('user will be navigated to Dashboard page', async function () {
    await expect(pageFixture.page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible();
    await expect(pageFixture.page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');
});