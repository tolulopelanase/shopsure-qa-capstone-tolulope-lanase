import { test } from '@playwright/test';
import ProductsPage from '../pages/ProductsPage.js';
import ProductDetailPage from '../pages/ProductDetailPage.js';
import CartPage from '../pages/CartPage.js';
import HeaderComponent from '../pages/HeaderComponent.js';
import testData from '../test-data/shopsure-test-data.json' with { type: 'json' };

test('Remove a product from the cart successfully', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);
    const cartPage = new CartPage(page);
    const header = new HeaderComponent(page);

    await page.goto('/products');
    await productsPage.searchProduct(testData.cartProducts[0]);
    await productsPage.openProduct(0);
    await productDetailPage.addToCart();
    await productDetailPage.continueShopping();

    await header.goToCart();

    if (await cartPage.getCartItemCount() !== 1) {
        throw new Error('Expected one product in the cart before removal.');
    }

    await cartPage.removeProduct();

    if (await cartPage.getCartItemCount() !== 0) {
        throw new Error('Product was not removed from the cart.');
    }
});