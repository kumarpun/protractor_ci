import { AppPage } from './app.po';
import { browser, ExpectedConditions } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.wait(ExpectedConditions.visibilityOf(page.getParagraphText()));
  })
});
