import BasePage from './BasePage.js';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.loginEmail = page.locator('[data-qa="login-email"]');
        this.loginPassword = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');

        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');

        this.loginError = page.locator('form').filter({
            has: this.loginButton
        }).locator('p');

        this.signupError = page.locator('form').filter({
            has: this.signupButton
        }).locator('p');
    }

    async login(email, password) {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }

    async signup(name, email) {
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
        await this.signupButton.click();
    }

    async getLoginError() {
        return await this.loginError.textContent();
    }

    async getSignupError() {
        return await this.signupError.textContent();
    }
}

export default LoginPage;