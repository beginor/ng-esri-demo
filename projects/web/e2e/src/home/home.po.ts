import { browser, by, element } from 'protractor';

export class HomePage {

    public async navigateTo(): Promise<any> {
        return browser.get('/home');
    }

    public async getHelloButtonText(): Promise<string> {
        return element(by.css('app-home button.btn')).getText();
    }

    public async clickHelloButton(): Promise<void> {
        return element(by.css('app-home button.btn')).click();
    }

}
