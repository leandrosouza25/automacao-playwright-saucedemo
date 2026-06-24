import { test, expect } from '@playwright/test';

test.describe('Testes de API Back-end - JSONPlaceholder', () => {

  test('Deve criar uma nova postagem com sucesso via POST', async ({ request }) => {

    const resposta = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'Novo Teste de API',
        body: 'Validando o back-end com Playwright e TypeScript',
        userId: 1
      }
    });

    // ✔️ Validação do status HTTP
    expect(resposta.status(), 'Status inesperado na criação do post')
      .toBe(201);

    // ✔️ Validação do tipo de resposta
    expect(resposta.headers()['content-type'])
      .toContain('application/json');

    // ✔️ Parse do JSON de resposta
    const dadosResposta = await resposta.json();

    // ✔️ Validações do conteúdo retornado
    expect(dadosResposta.title).toBe('Novo Teste de API');
    expect(dadosResposta.body).toBe('Validando o back-end com Playwright e TypeScript');
    expect(dadosResposta.userId).toBe(1);

    // ✔️ JSONPlaceholder sempre retorna um ID simulado
    expect(typeof dadosResposta.id).toBe('number');
    expect(dadosResposta).toHaveProperty('id');
  });

});