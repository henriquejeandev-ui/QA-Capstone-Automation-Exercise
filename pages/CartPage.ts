import { Page, Locator } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly productName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('#cart_info_table h4 a').first();
    }
}