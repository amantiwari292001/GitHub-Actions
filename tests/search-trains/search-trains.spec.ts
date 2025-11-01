import test from "@playwright/test";
import { paths } from "../../data/paths/paths";
import { removeLoginPopupIfPresent } from "../../support/helper-methods";

test.beforeEach(async({page}) => {
    removeLoginPopupIfPresent(page);
})

test.describe.parallel('Search Trains Functionality', async() => {
    test('Cheapest train between two destinations', async({page}) => {
        await page.goto('/' + paths.trainsPage);
        await page.waitForTimeout(3000);
    });
});