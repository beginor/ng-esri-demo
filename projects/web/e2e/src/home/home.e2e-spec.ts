import { HomePage } from './home.po';

describe('ng-esri-demo Home', () => {

    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display a button', async () => {
        page.navigateTo();
        const text = await page.getHelloButtonText();
        expect(text).toEqual('Hello, Angular !');
    });

    it('should change button text on click', async () => {
        await page.navigateTo();
        await page.clickHelloButton();
        const text = await page.getHelloButtonText();
        expect(text).toEqual('You have clicked 1 times!');
    });

});
