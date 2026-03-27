import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Full E2E Flow - SauceDemo', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.goTo();
   await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifyLoginSuccess();
  // Ensure login success
  await expect(page.locator('.app_logo')).toBeVisible();

  // Product Page
  await productPage.validatePageLoaded();
  await productPage.selectItem();

  const itemPrice = await productPage.getItemPrice();

  await productPage.addToCart();
  await productPage.goToCart();

  // Cart Page
  await cartPage.validatePrice(itemPrice);
  await cartPage.goToCheckout();

  // Checkout Page
  await checkoutPage.fillDetails('SACHIN', 'SATHISH', '600069');
  await checkoutPage.validateItem();

  const { OrderId, ShippedBy, NewTax } = await checkoutPage.getOrderDetails();

  const total = await checkoutPage.validateTotal(itemPrice, NewTax);

  await checkoutPage.finishOrder();

});