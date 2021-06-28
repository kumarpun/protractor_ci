import { AppPage } from './app.po';
import { browser, ExpectedConditions, element, by, utils } from 'protractor';
import { async } from '@angular/core/testing';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

fdescribe('Post Section', () => {
    let app = new AppPage();

    beforeEach(async () => {
        app = new AppPage();
        await app.login.navigateTo();
        await app.login.setSchool(app.users[0].school);
        browser.sleep(5000);
        await app.login.SelectSchool.click();
        await app.login.ClickGroup.click();
        browser.sleep(3000);
        await app.login.SelectGroup.click();
        await (browser.wait(ExpectedConditions.visibilityOf(app.login.emailInput()), 10000));
        await app.validLogin(app.users[0].email, app.users[0].password);
        await (browser.wait(ExpectedConditions.visibilityOf(app.login.textAreaForPost)));

        // browser.manage().timeouts().implicitlyWait(1000);
    
    

})

   it('Verify user can post a text on messageboard', async () => {

    await app.login.textAreaForPost.sendKeys('helloooo from github action');
       await app.login.PostButton.click();
       browser.sleep(5000);
       
    });
  });
