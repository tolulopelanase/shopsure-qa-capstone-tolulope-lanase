import BasePage from './BasePage.js';

class AccountStatusPage extends BasePage {
    constructor(page) {
        super(page);
        this.accountCreatedMessage = page.getByText('Account Created!', { exact: true });
        this.accountDeletedMessage = page.getByText('Account Deleted!', { exact: true });
        this.continueButton = page.getByText('Continue', { exact: true });
    }

    async isAccountCreated() {
        return await this.accountCreatedMessage.isVisible();
    }

    async isAccountDeleted() {
        return await this.accountDeletedMessage.isVisible();
    }

    async continue() {
        await this.continueButton.click();
    }
}

export default AccountStatusPage;