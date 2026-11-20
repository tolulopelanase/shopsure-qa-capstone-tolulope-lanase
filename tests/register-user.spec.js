import { test } from '@playwright/test';
import TestDataGenerator from '../utils/TestDataGenerator.js';
import LoginPage from '../pages/LoginPage.js';
import AccountInformationPage from '../pages/AccountInformationPage.js';
import AccountStatusPage from '../pages/AccountStatusPage.js';

test('Register a new user successfully', async ({ page }) => {
    const dataGenerator = new TestDataGenerator();
    const user = dataGenerator.generateUserProfile();

    const loginPage = new LoginPage(page);
    const accountInfoPage = new AccountInformationPage(page);
    const accountStatusPage = new AccountStatusPage(page);

    await page.goto('/login');
    await loginPage.signup(user.name, user.email);
    await accountInfoPage.fillAccountInformation(user);
    await accountInfoPage.createAccount();

    if (!await accountStatusPage.isAccountCreated()) {
        throw new Error('Account registration was not successful.');
    }
});