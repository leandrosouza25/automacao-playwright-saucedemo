import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly tituloProdutos: Locator;
  readonly botaoAdicionarCarrinho: Locator;
  readonly iconeCarrinho: Locator;
  readonly nomeProdutoCarrinho: Locator;
  readonly botaoCheckout: Locator;
  readonly campoNome: Locator;
  readonly campoSobrenome: Locator;
  readonly campoCep: Locator;
  readonly botaoContinuar: Locator;
  readonly botaoFinalizar: Locator;
  readonly mensagemSucesso: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tituloProdutos = page.locator('.title');
    this.botaoAdicionarCarrinho = page.locator('#add-to-cart-sauce-labs-backpack');
    this.iconeCarrinho = page.locator('.shopping_cart_link');
    this.nomeProdutoCarrinho = page.locator('.inventory_item_name');
    this.botaoCheckout = page.locator('#checkout');
    this.campoNome = page.locator('#first-name');
    this.campoSobrenome = page.locator('#last-name');
    this.campoCep = page.locator('#postal-code');
    this.botaoContinuar = page.locator('#continue');
    this.botaoFinalizar = page.locator('#finish');
    this.mensagemSucesso = page.locator('.complete-header');
  }

  async adicionarProdutoAoCarrinho() {
    await this.botaoAdicionarCarrinho.click();
    await this.iconeCarrinho.click();
  }

  async preencherDadosEntrega(nome: string, sobrenome: string, cep: string) {
    await this.botaoCheckout.click();
    await this.campoNome.fill(nome);
    await this.campoSobrenome.fill(sobrenome);
    await this.campoCep.fill(cep);
    await this.botaoContinuar.click();
  }

  async finalizarCompra() {
    await this.botaoFinalizar.click();
  }
}
