import { AppPage } from './app.po';

describe('favies App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getAppTitle()).toEqual('Favies');
    });
});
