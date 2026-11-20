import BasePage from './BasePage.js';

class ProductsPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.productCards = page.locator('.product-image-wrapper');
        this.searchedProductsHeading = page.getByRole('heading', { name: 'Searched Products' });
    }

    async searchProduct(searchTerm) {
        await this.searchInput.fill(searchTerm);
        await this.searchButton.click();
    }

    async getProductCount() {
        return await this.productCards.count();
    }

    async openProduct(index = 0) {
        await this.productCards.nth(index).getByRole('link', { name: 'View Product' }).click();
    }

    async isSearchResultsVisible() {
        return await this.searchedProductsHeading.isVisible();
    }
}

export default ProductsPage;