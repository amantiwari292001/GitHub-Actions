import { Locator, Page } from "@playwright/test";
import { selectors } from "../data/selectors/selectors";

export async function removeLoginPopupIfPresent(page: Page) {
    await page.addLocatorHandler(page.locator(selectors.loginSignupPopupCloseBtn), async(element: Locator) => {
        if (await element.isVisible()) {
            await element.click();
        }
    });
}