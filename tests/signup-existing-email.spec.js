import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test('Prevent registration with an existing email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/login');
    await loginPage.signup(
        'ShopSure Test User',
        process.env.SHOPSURE_USER_EMAIL
    );

    const errorMessage = await loginPage.getSignupError();

    if (!errorMessage) {
        throw new Error('Expected an error for an already registered email.');
    }
});