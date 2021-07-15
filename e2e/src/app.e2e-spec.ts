import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('去github仓库', async () => {
        await page.navigateTo();
        page.getTitleText()
        // expect(await page.getTitleText()).toEqual('ngx-vant app is running!');
    });
    it('修改标题', async () => {
        expect(await page.getTittt()).toEqual('dddddd')
        expect(await page.getTittt()).toBe('dddddd')
        // expect(await page.getTitleText()).toEqual('ngx-vant app is running!');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
