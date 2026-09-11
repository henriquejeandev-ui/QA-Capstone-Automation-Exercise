import { test, expect } from "@playwright/test";
import { ProductsPage } from "../../pages/ProductsPage";

test("should return the product list when searching for a product", async ({
  page,
}) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto();
  await productsPage.searchProduct("Blue Top");
  await productsPage.searchButton.click();

  await expect(productsPage.productName).toHaveText("Blue Top");
});
