import { AppPage } from './app.po';

describe('ng-esri-demo App', () => {

    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display Navbar Brand', () => {
        page.navigateTo();
        expect(page.getNavbarBrand()).toEqual('Angular Demo');
    });

});
