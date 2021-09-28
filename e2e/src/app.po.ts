import { LoginPage } from './loginPage.po';
import {browser, by, element, ElementFinder, ExpectedConditions} from 'protractor';

export interface AutomationUser {
  school: string;
  email: string;
  username?: string;
  password: string;
}

export interface AutomationUserForTeacher {
  email: string;
  password: string;
}
export class AppPage {
  public users: AutomationUser[] = [
    { school:'St Production', email: 'kumar1', password: 'qwertyuiop' },
  ];

  public login = new LoginPage();

  public validLogin(usernameText, passwordText) {
    browser.wait(ExpectedConditions.visibilityOf(this.login.emailInput()), 10000);
    this.login.setEmailText(usernameText);
    browser.wait(ExpectedConditions.visibilityOf(this.login.passwordInput()), 10000);
    this.login.setPasswordText(passwordText);
    browser.wait(ExpectedConditions.visibilityOf(this.login.loginButton()), 10000);
    this.login.clickLoginBtn();
  }
}
