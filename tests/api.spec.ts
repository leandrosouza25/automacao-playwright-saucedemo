import { test, expect } from '@playwright/test';
import { PostsService } from '../api/posts.service';

test.describe('API Tests - JSONPlaceholder', () => {

  test('Deve criar uma nova postagem com sucesso via POST', async ({ request }, testInfo) => {

    const postsService = new PostsService(request);

    const payload = {
      title: 'Novo Teste de API',
      body: 'Validando o back-end com Playwright e TypeScript',
      userId: 1
    };

    await test.step('Criar payload da requisição', async () => {
      expect(payload.title).toBeDefined();
    });

    const resposta = await test.step('Executar POST /posts', async () => {
      return await postsService.createPost(payload);
    });

    await test.step('Validar status code', async () => {
      expect(resposta.status()).toBe(201);
    });

    const dadosResposta = await test.step('Parse da resposta JSON', async () => {
      return await resposta.json();
    });

    await test.step('Validar dados da resposta', async () => {
      expect(dadosResposta.title).toBe(payload.title);
      expect(dadosResposta.body).toBe(payload.body);
      expect(dadosResposta.userId).toBe(payload.userId);
      expect(typeof dadosResposta.id).toBe('number');
    });

    // Attach correto para Playwright + Allure
    await testInfo.attach('Response Body', {
      body: JSON.stringify(dadosResposta, null, 2),
      contentType: 'application/json'
    });

  });

});