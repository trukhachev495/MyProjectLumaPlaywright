import { test, expect } from '@playwright/test';
import HomePage from '../page_objects/homePage';
import {PRICE_OPTIONS} from '../helpers/testData';

test.describe('gearBags', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.open()
  })
  PRICE_OPTIONS.forEach((option,idx) => {
   test(`Check that there is a price option in gear bags ${option}`,
   async ({page}) => {
    const homePage = new HomePage(page)

    await homePage.hoverGearLink();
    const gearBagsPage = await homePage.clickGearBagsLink();
    await gearBagsPage.clickPriceOptions();

    expect(gearBagsPage.locators.getOptionPriceLocator().nth(idx)).toContainText(option)
    
  })})
})
