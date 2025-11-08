import { chromium, expect } from "@playwright/test";
import { urls } from "../data/urls/urls";

async function globalSetup() {
  const browser = await chromium.launch()

  const page = await browser.newPage();

  await page.goto(urls.baseURL);
  console.log(page.url());
  await expect(page).toHaveURL(urls.baseURL);

  await browser.close(); // Optional: close browser after setup
}

export default globalSetup;
