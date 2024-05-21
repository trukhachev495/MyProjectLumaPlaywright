class GearBagsPage{
    constructor(page) {
        this.page = page;
      } 
      locators = {
        getPrice: () => this.page.getByRole('tab', {name: 'Price'}),
        getOptionPriceLocator: () => this.page.locator('a[href *= "https://magento.softwaretestingboard.com/gear/bags.html?price"]')
      }

      async clickPriceOptions(){
      await this.locators.getPrice().click()

      return this.page
      }

}
export default GearBagsPage