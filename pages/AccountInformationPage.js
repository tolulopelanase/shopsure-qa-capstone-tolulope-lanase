import BasePage from './BasePage.js';

class AccountInformationPage extends BasePage {
    constructor(page) {
        super(page);

        this.titleMr = page.locator('#id_gender1');
        this.titleMrs = page.locator('#id_gender2');
        this.password = page.locator('#password');
        this.day = page.locator('#days');
        this.month = page.locator('#months');
        this.year = page.locator('#years');
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.company = page.locator('#company');
        this.address = page.locator('#address1');
        this.country = page.locator('#country');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.zipcode = page.locator('#zipcode');
        this.mobileNumber = page.locator('#mobile_number');
        this.createAccountButton = page.locator('[data-qa="create-account"]');
    }

    async fillAccountInformation(profile) {
        if (profile.title === 'Mr') await this.titleMr.check();
        else await this.titleMrs.check();

        await this.password.fill(profile.password);
        await this.day.selectOption(profile.birthDay);
        await this.month.selectOption(profile.birthMonth);
        await this.year.selectOption(profile.birthYear);
        await this.firstName.fill(profile.firstName);
        await this.lastName.fill(profile.lastName);
        await this.company.fill(profile.company);
        await this.address.fill(profile.address);
        await this.country.selectOption({ label: profile.country });
        await this.state.fill(profile.state);
        await this.city.fill(profile.city);
        await this.zipcode.fill(profile.zipcode);
        await this.mobileNumber.fill(profile.mobileNumber);
    }

    async createAccount() {
        await this.createAccountButton.click();
    }
}

export default AccountInformationPage;