import { AppPage } from './app.po';

describe('ng-seed App', () => {

    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display Navbar Brand', () => {
        page.navigateTo();
        expect(page.getNavbarBrand()).toEqual('Angular Demo');
    });

});
