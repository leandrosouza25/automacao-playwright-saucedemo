import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CheckoutPage } from '../pages/checkout.page';

test.describe('Fluxo Completo de Checkout - SauceDemo (Padrão POM)', () => {

  test('Deve realizar uma compra com sucesso do início ao fim', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.acessar();
    await loginPage.realizarLogin('standard_user', 'secret_sauce');

    await expect(checkoutPage.tituloProdutos).toHaveText('Products');

    await checkoutPage.adicionarProdutoAoCarrinho();
    await expect(checkoutPage.nomeProdutoCarrinho).toHaveText('Sauce Labs Backpack');

    await checkoutPage.preencherDadosEntrega('Leandro', 'Souza', '12345-678');
    await checkoutPage.finalizarCompra();

    await expect(checkoutPage.mensagemSucesso).toHaveText('Thank you for your order!');
  });

});
