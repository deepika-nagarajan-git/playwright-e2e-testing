export class ProductPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.cart = page.locator('[data-test="shopping-cart-link"]');
    this.item = page.locator('[data-test="inventory-item-name"]', { hasText: process.env.PRODUCT_NAME });
    this.addToCartBtn = page.locator('//*[@id="add-to-cart"]');
    this.price = page.locator('[data-test="inventory-item-price"]');
    this.removeBtn = page.locator('[data-test="remove"]');
  }

  async validatePageLoaded() {
    await this.sortDropdown.isVisible();
  }

  async selectItem() {
    await this.item.isVisible();
    await this.item.click();
  }

  async getItemPrice() {
    const dollar = await this.price.textContent();
    return dollar;
  }

  async addToCart() {
    await this.addToCartBtn.isVisible();
    await this.addToCartBtn.click();
    await this.removeBtn.isVisible();
  }

  async goToCart() {
    await this.cart.isVisible();
    await this.cart.click();
  }
}