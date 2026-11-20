import { test } from '@playwright/test';
import ProductsPage from '../pages/ProductsPage.js';
import ProductDetailPage from '../pages/ProductDetailPage.js';
import CartPage from '../pages/CartPage.js';
import HeaderComponent from '../pages/HeaderComponent.js';
import testData from '../test-data/shopsure-test-data.json' with { type: 'json' };

test('Add two products and verify cart total', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);
    const cartPage = new CartPage(page);
    const header = new HeaderComponent(page);

    await page.goto('/products');

    await productsPage.searchProduct(testData.cartProducts[0]);
    await productsPage.openProduct(0);
    await productDetailPage.setQuantity(testData.cartQuantity);
    await productDetailPage.addToCart();
    await productDetailPage.continueShopping();

    await page.goto('/products');
    await productsPage.searchProduct(testData.cartProducts[1]);
    await productsPage.openProduct(0);
    await productDetailPage.addToCart();
    await productDetailPage.continueShopping();

    await header.goToCart();

    if (await cartPage.getCartItemCount() !== 2) {
        throw new Error('Cart should contain exactly two products.');
    }

    if (await cartPage.getCartTotal() <= 0) {
        throw new Error('Cart total was not calculated correctly.');
    }
});