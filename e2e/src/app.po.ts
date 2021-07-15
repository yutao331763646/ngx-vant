import { browser, by, element } from 'protractor';

export class AppPage {
    async navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl);
    }

    getTitleText(): void {
        element(by.css('app-root .logogithub')).click();
    }
    getTittt() {
        return element(by.css('app-root .tittt')).getText()
    }
}
