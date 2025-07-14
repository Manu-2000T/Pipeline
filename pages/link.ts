import { Page, expect } from '@playwright/test';
import { credentials, urls } from '../utils/testData';

export class Link {
  constructor(private page: Page) {}

  async gotoLoginPage(): Promise<void> {
    await this.page.goto(urls.login);
  }

  async login(email = credentials.validUser.email, password = credentials.validUser.password): Promise<void> {
    await this.page.locator('[data-test="email"]').fill(email);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-submit"]').click();
    await expect(this.page).toHaveTitle("Login - Practice Software Testing - Toolshop - v5.0");
   await this.page.screenshot({
  path: 'Screenshot/login-page.png',
  fullPage: true
});


  }
}
