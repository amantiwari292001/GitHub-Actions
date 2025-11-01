import test from "@playwright/test";
import { removeLoginPopupIfPresent } from "../../support/helper-methods";

test.beforeEach(async({page}) => {
    removeLoginPopupIfPresent(page);
});

test.describe.parallel('Search', async() => {
    test('Flight', async({page}) => {
        page.goto('/');
        await page.waitForTimeout(3000);
    });
});