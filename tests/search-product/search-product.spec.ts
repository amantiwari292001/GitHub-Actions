import test from "@playwright/test";
import { paths } from "../../data/paths/paths";
import { removeLoginPopupIfPresent } from "../../support/helper-methods";
import { urls } from "../../data/urls/urls";

test.beforeEach(async({page}) => {
    removeLoginPopupIfPresent(page);
});

test.describe.parallel('Search checks', async() => {
    test('Search the cheapest phone', async({page}) => {
        page.goto(urls.baseURL);
    });
});