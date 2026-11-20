class HeaderComponent {
    constructor(page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.cartLink = page.getByRole('link', { name: 'Cart' });
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.loggedInMessage = page.getByText('Logged in as');
    }

    async goToHome() {
        await this.homeLink.click();
    }

    async goToProducts() {
        await this.productsLink.click();
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async goToLogin() {
        await this.loginLink.click();
    }

    async logout() {
        await this.logoutLink.click();
    }

    async isLoggedIn() {
        return await this.loggedInMessage.isVisible();
    }

    async isLoggedOut() {
        return await this.loginLink.isVisible();
    }
}

export default HeaderComponent;