import BasePage from './BasePage.js';
import { parsePriceText, calculateCartTotal } from '../utils/cartPriceCalculator.js';

class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartItems = page.locator('tr[id^="product-"]');
        this.cartPrices = page.locator('td.cart_price p');
        this.cartQuantities = page.locator('td.cart_quantity button');
        this.removeButtons = page.locator('td.cart_delete a');
    }

    async getCartItemCount() {
        return await this.cartItems.count();
    }

    async getCartTotal() {
        const itemCount = await this.getCartItemCount();
        const cartItemList = [];

        for (let i = 0; i < itemCount; i++) {
            const priceText = await this.cartPrices.nth(i).textContent();
            const quantityText = await this.cartQuantities.nth(i).textContent();

            cartItemList.push({
                unitPrice: parsePriceText(priceText),
                quantity: Number(quantityText.trim())
            });
        }

        return calculateCartTotal(cartItemList);
    }

    async removeProduct(index = 0) {
        await this.removeButtons.nth(index).click();
        await this.cartItems.nth(index).waitFor({ state: 'detached', timeout: 10000 });
    }

    async isCartVisible() {
        return await this.cartItems.first().isVisible();
    }
}

export default CartPage;