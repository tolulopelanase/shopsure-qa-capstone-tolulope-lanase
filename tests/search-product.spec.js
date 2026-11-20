import { test } from '@playwright/test';
import ProductsPage from '../pages/ProductsPage.js';
import testData from '../test-data/shopsure-test-data.json' with { type: 'json' };

test('Search for a product', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await page.goto('/products');
    await productsPage.searchProduct(testData.searchTerm);

    if (!await productsPage.isSearchResultsVisible()) {
        throw new Error('Search results heading was not displayed.');
    }

    if (await productsPage.getProductCount() === 0) {
        throw new Error('No products were returned for the search.');
    }
});