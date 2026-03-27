import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');

    this.item = page.locator('[data-test="inventory-item-name"]', { hasText: 'Sauce Labs Onesie' });

    this.paymentInfo = page.locator('[data-test="payment-info-value"]');
    this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
    this.tax = page.locator('[data-test="tax-label"]');
    this.totalLabel = page.locator('[data-test="total-label"]');

    this.finishBtn = page.locator('#finish');
  }

  async fillDetails(first, last, zip) {
    await expect(this.title).toHaveText('Checkout: Your Information');

    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);

    await this.continueBtn.click();
  }

  async validateItem() {
    await expect(this.item).toBeVisible();
  }

  async getOrderDetails() {
    const OrderId = await this.paymentInfo.textContent();
    const ShippedBy = await this.shippingInfo.textContent();
    const Tax = await this.tax.textContent();

    const NewTax = Tax.split('$')[1];

    return { OrderId, ShippedBy, NewTax };
  }

  async validateTotal(itemPrice, tax) {
    const Newdollar = itemPrice.split('$')[1];
    const total = (parseFloat(Newdollar) + parseFloat(tax)).toFixed(2);

    await expect(this.totalLabel).toContainText(`$${total}`);

    return total;
  }

  async finishOrder() {
    await this.finishBtn.click();
  }
}