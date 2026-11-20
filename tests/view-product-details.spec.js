import { test } from '@playwright/test';
import ProductsPage from '../pages/ProductsPage.js';
import ProductDetailPage from '../pages/ProductDetailPage.js';
import testData from '../test-data/shopsure-test-data.json' with { type: 'json' };

test('View product details successfully', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);

    await page.goto('/products');
    await productsPage.searchProduct(testData.searchTerm);
    await productsPage.openProduct(0);

    if (!await productDetailPage.isProductDetailsVisible()) {
        throw new Error('Product details were not displayed.');
    }

    if (!await productDetailPage.getProductPrice()) {
        throw new Error('Product price was not displayed.');
    }
});