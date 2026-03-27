import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
    this.errorMsg = page.locator('[data-test="error"]');
  }

  async goTo() {
    await this.page.goto('/');
    await expect(this.username).toBeVisible();
  }

  async login(user, pass) {
    // Clear fields properly (avoid autofill issues)
    await this.username.click();
    await this.username.press('Control+A');
    await this.username.press('Delete');
    await this.username.fill(user);

    await this.password.click();
    await this.password.press('Control+A');
    await this.password.press('Delete');
    await this.password.fill(pass);

    await this.loginBtn.click();
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator('.app_logo')).toBeVisible();
  }

  async verifyLoginFailure() {
    await expect(this.errorMsg).toBeVisible();
  }
}