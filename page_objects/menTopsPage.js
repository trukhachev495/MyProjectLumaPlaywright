class MenTopsPage {
    constructor(page) {
      this.page = page;
    }
    
    locators = {
        getMenTopsStyle: () => this.page.getByRole("tab",{name:"Style"}),
        getMenTopsListStyle: () => this.page.locator('a[href*= "men/tops-men.html?style_general"]'),
        getMenTopsStyleInsulated: () => this.page.locator('a[href*= "men/tops-men.html?style_general=116"]').filter({ hasText: 'Insulated 5 item' }),
    }

    async clickMenTopsStyle(){
        await this.locators.getMenTopsStyle().click();
    
        return this.page;
       };
}
export default MenTopsPage;