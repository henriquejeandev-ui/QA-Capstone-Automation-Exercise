import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";

test("should redirect to the home page when login is valid", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    process.env.TEST_USER_EMAIL || "",
    process.env.TEST_USER_PASSWORD || "",
  );

  await expect(page).toHaveURL("https://automationexercise.com/");
});
