import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.price = page.locator('[data-test="inventory-item-price"]');
    this.checkoutBtn = page.locator('#checkout');
  }

  async validatePrice(dollar) {
    await expect(this.price).toHaveText(dollar);
  }

  async goToCheckout() {
    await this.checkoutBtn.isVisible();
    await this.checkoutBtn.click();
  }
}