import { test, expect } from '@playwright/test';

test.describe('Fluxo Completo de Checkout - SauceDemo', () => {

  test('Deve realizar uma compra com sucesso do início ao fim', async ({ page }) => {
    await page.goto('https://saucedemo.com');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page.locator('.title')).toHaveText('Products');

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    await page.locator('.shopping_cart_link').click();
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    await page.locator('#checkout').click();

    await page.locator('#first-name').fill('Leandro');
    await page.locator('#last-name').fill('Souza');
    await page.locator('#postal-code').fill('12345-678');
    await page.locator('#continue').click();

    await page.locator('#finish').click();

    const mensagemSucesso = page.locator('.complete-header');
    await expect(mensagemSucesso).toHaveText('Thank you for your order!');
  });

});

