import { test, expect } from "@playwright/test";
import HomePage from "..//page_objects/homePage.js"
import { LIST_STYLE_MEN_TOPS, BASE_URL, MEN_TOPS_PAGE_END_POINT} from "..//helpers/testData.js"

test.describe('menTops', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })
})