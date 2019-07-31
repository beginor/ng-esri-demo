import { browser, by, element, promise } from 'protractor';

export class HomePage {

    public navigateTo(): promise.Promise<any> {
        return browser.get('/home');
    }

    public getHelloButtonText(): promise.Promise<string> {
        return element(by.css('app-home button.btn')).getText();
    }

    public clickHelloButton(): promise.Promise<void> {
        return element(by.css('app-home button.btn')).click();
    }

}
