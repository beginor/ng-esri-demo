import { browser, by, element } from 'protractor';

export class HomePage {

    public navigateTo() {
        return browser.get('/index.html#/home');
    }

    public getHelloButtonText() {
        return element(by.css('home button.btn')).getText();
    }

    public clickHelloButton() {
        element(by.css('home button.btn')).click();
    }

}
