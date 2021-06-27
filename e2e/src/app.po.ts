import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/https://class.digiisocial.com/anz/?demo');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
