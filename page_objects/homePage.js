
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
        if (await this.page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()); 
                await this.page.getByRole('button', { name: 'Consent' }).click();
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