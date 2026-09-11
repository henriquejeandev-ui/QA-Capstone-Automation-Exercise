import { test, expect } from "@playwright/test";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";

test("should add a product to the cart", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto();
  await productsPage.searchProduct("Blue Top");
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  const cartPage = new CartPage(page);
  await expect(cartPage.productName).toHaveText("Blue Top");
});
