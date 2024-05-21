
import MenTopsPage from "./menTopsPage.js";
import GearBagsPage from "./gearBagsPage.js"

class HomePage {
    constructor(page) {
      this.page = page;
    }
    
    locators = {
        // locators for the page Men
        getMenLink: () =>this.page.locator('#ui-id-5'),
        getMenTopsLink: () => this.page.locator('#ui-id-17'),
        getGearLink:() => this.page.locator('#ui-id-6'),
        getGearBagsLink:() => this.page.locator('#ui-id-25')
    }

    async open() {
        await this.page.goto("/");
      }

    // methods for the page Men
    async hoverMenLink() {
        await this.locators.getMenLink().hover();
    
        return this.page;
      }

      async clickMenTopsLink() {
        await this.locators.getMenTopsLink().click();
    
        return new MenTopsPage(this.page);
      }

      async hoverGearLink() {
        await this.locators.getGearLink().hover();

        return this.page;
      }

      async clickGearBagsLink() {
        await this.locators.getGearBagsLink().click()

        return new GearBagsPage(this.page)
      }
}
export default HomePage;