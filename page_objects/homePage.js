
import MenTopsPage from "./menTopsPage.js";

class HomePage {
    constructor(page) {
      this.page = page;
    }
    
    locators = {
        // locators for the page Men
        getMenLink: () =>this.page.locator('#ui-id-5'),
        getMenTopsLink: () => this.page.locator('#ui-id-17'),
    }

    async open() {
        await this.page.goto("/");
      }

    // methods for the page Men
    async hoverMenLink() {
        await this.locators.getMenLink().hover();
    
        return this;
      }

      async clickMenTopsLink() {
        await this.locators.getMenTopsLink().click();
    
        return new MenTopsPage(this.page);
      }
}
export default HomePage;