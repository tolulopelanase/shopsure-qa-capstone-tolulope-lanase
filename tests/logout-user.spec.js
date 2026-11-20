import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import HeaderComponent from '../pages/HeaderComponent.js';

test('Logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const header = new HeaderComponent(page);

    await page.goto('/login');
    await loginPage.login(
        process.env.SHOPSURE_USER_EMAIL,
        process.env.SHOPSURE_USER_PASSWORD
    );
    await header.logout();

    if (!await header.isLoggedOut()) {
        throw new Error('Logout was unsuccessful.');
    }
});