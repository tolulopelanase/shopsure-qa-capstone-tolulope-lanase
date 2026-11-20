import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test('Login with incorrect password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/login');
    await loginPage.login(
        process.env.SHOPSURE_USER_EMAIL,
        'WrongPassword123!'
    );

    const errorMessage = await loginPage.getLoginError();

    if (!errorMessage) {
        throw new Error('Expected an error message for the incorrect password.');
    }
});