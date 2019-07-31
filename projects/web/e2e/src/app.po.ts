import { browser, by, element, promise } from 'protractor';

export class AppPage {

    public navigateTo(): promise.Promise<any> {
        browser.sleep(1000);
        return browser.get('/');
    }

    public getNavbarBrand(): promise.Promise<string> {
        return element(by.css('app-root a.navbar-brand')).getText();
    }

}
