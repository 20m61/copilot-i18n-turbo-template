import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display localized title and subtitle", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();
    await expect(
      page.getByText("This is a multilingual Next.js app")
    ).toBeVisible();
    await page.goto("/ja");
    await expect(page.getByRole("heading", { name: "ようこそ" })).toBeVisible();
    await expect(
      page.getByText("これは多言語対応のNext.jsアプリです")
    ).toBeVisible();
  });
});
