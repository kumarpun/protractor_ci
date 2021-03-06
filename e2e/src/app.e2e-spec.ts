import { AppPage } from './app.po';
import { browser, ExpectedConditions, element, by, utils } from 'protractor';
import { async } from '@angular/core/testing';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

describe('Post Section', () => {
    let app = new AppPage();

    beforeEach(async () => {
        app = new AppPage();
        browser.ignoreSynchronization = false;
        await app.login.navigateTo();
        await app.login.setSchool(app.users[0].school);
        browser.sleep(5000);
        await app.login.SelectSchool.click();
        await app.login.ClickGroup.click();
        browser.sleep(3000);
        await app.login.SelectGroup.click();
        await (browser.wait(ExpectedConditions.visibilityOf(app.login.emailInput()), 10000));
        await app.validLogin(app.users[0].email, app.users[0].password);

        // browser.manage().timeouts().implicitlyWait(1000);
    
    

})


    fit('Verify user can post again', async () => {
        await (browser.wait(ExpectedConditions.visibilityOf(app.login.textAreaForPost)));
      await app.login.textAreaForPost.sendKeys('hello again');
         await app.login.PostButton.click();
         browser.sleep(5000);
         
      });
  });
