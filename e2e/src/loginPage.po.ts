import {browser, by, element, ElementFinder, ExpectedConditions} from 'protractor';

export class LoginPage {
  // public searchSchool = () => element(by.xpath("//div[contains(text(),'Search School')]"));
  public schoolInput = () => element(by.xpath("//body/div[@id='root']/div[1]/div[2]/form[1]/div[1]/div[1]"));
  public emailInput = () => element(by.xpath("//body/div[@id='root']/div[1]/div[2]/form[1]/input[1]"));
  public passwordInput = () => element(by.xpath("//input[@placeholder='Password']"));
  public loginButton = () => element(by.xpath("//button[contains(text(),'LOG IN')]"));
  public log = () => element(by.xpath('//*[@id="root"]/div'));

  public async navigateTo(): Promise<any> {

    await browser.waitForAngularEnabled(false);
    return browser.get('');
  }

  // public async getEmailText(): Promise<any> {
  //   return this.emailInput().getText();
  // }
  // public async schoolSearch(text: string): Promise<any> {
  //   const searchSchool = this.searchSchool();
  //   await searchSchool.clear();
  //   await searchSchool.sendKeys(text);
  // }

  public async setSchool(text: string): Promise<any> {
    const schoolInput = this.schoolInput();
    // await schoolInput.click();
    await schoolInput.sendKeys(text);
  }

  public async setEmailText(text: string): Promise<any> {
    const emailInput = this.emailInput();
    await emailInput.clear();
    await emailInput.sendKeys(text);
  }

  // public async getPasswordText(): Promise<any> {
  //   return this.passwordInput().getText();
  // }

  public async setPasswordText(text: string): Promise<any> {
    const passwordInput = this.passwordInput();
    await passwordInput.click();
    await passwordInput.clear();
    await passwordInput.sendKeys(text);
  }

  public async clickLoginBtn(): Promise<any> {
    await this.loginButton().click();
  }

  public get SchoolOption(): ElementFinder {
    return element(by.xpath("//i[@class='anticon anticon-down ant-select-arrow-icon']"));
  }
  public get Yunderup(): ElementFinder {
    return element(by.xpath("//li[@class='ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active']"));
  }

  public get SelectSchool(): ElementFinder {
    return element(by.xpath('//li[contains(text(),"Production Test")]'));
  }

  public get ClickGroup(): ElementFinder {
    return element(by.xpath("//div[contains(text(),'Select Group')]"));
  }
  
  public get SelectGroup(): ElementFinder {
    return element(by.xpath("//li[contains(text(),'Class A')]"));
  }

  public get SelectDiGiiSchool(): ElementFinder {
    return element(by.xpath('//div[contains(text(),"Production Test")]'));
  }

  public get PostButton(): ElementFinder {
    return element(by.xpath("//button[contains (text(), 'POST')]"));
    
}
public get textAreaForPost(): ElementFinder {
    return element(by.xpath('//*[@id="newTextInput"]'));
  }
}