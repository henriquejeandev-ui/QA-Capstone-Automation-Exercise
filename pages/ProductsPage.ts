import { Page, Locator } from "@playwright/test";

export class ProductsPage {
        readonly page: Page;
        readonly searchInput: Locator;
        readonly searchButton: Locator;
        readonly productName: Locator;
        readonly addToCartButton: Locator;
        readonly viewCartLink: Locator;

        constructor(page: Page) {
            this.page = page;
            this.searchInput = page.locator('#search_product');
            this.searchButton = page.locator('#submit_search');
            this.productName = page.locator('.product-image-wrapper p').first();
            this.addToCartButton = page.locator('.add-to-cart').first();
            this.viewCartLink = page.getByRole('link', {name: 'View Cart'});
        }

        async goto() {
            await this.page.goto('https://automationexercise.com/products');
        }

        async searchProduct(term: string) {
            await this.searchInput.fill(term);
            await this.searchButton.click();
        }

        async addFirstProductToCart() {
            await this.addToCartButton.click();
        }

        async goToCart() {
            await this.viewCartLink.click();
        }
    }