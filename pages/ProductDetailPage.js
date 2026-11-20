import BasePage from './BasePage.js';

class ProductDetailPage extends BasePage {
    constructor(page) {
        super(page);
        this.quantityInput = page.locator('#quantity');
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.productName = page.locator('.product-information h2');
        this.productPrice = page.locator('.product-information span span');
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
    }

    async setQuantity(quantity) {
        await this.quantityInput.fill(String(quantity));
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async getProductPrice() {
        return await this.productPrice.textContent();
    }

    async isProductDetailsVisible() {
        try {
            await this.productName.waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch {
            return false;
        }
    }
}

export default ProductDetailPage;