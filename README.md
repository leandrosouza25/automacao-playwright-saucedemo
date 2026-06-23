# 🎭 Automação de Checkout Cross-Browser com Playwright

Este repositório contém a automação de testes ponta a ponta (E2E) para o fluxo crítico de checkout do e-commerce **SauceDemo**, utilizando práticas modernas de engenharia de QA.

---

## 🛠️ Tecnologias e Arquitetura
* **Framework:** Playwright (Execução ultra-rápida fora do navegador)
* **Linguagem:** TypeScript (Tipagem estática e segurança de código)
* **Estratégia de Seletores:** Localizadores baseados em atributos estáticos (`id`) para mitigar testes frágeis (*flaky*)

---

## 🌐 Cobertura Cross-Browser Dinâmica
O projeto está configurado para executar o mesmo cenário de forma simultânea nos três principais motores web do mercado, garantindo a compatibilidade de layout e negócio:
* **Chromium** (Google Chrome, Microsoft Edge)
* **Firefox** (Mozilla)
* **WebKit** (Apple Safari)

---

## 📊 Execução e Relatórios Visuais
O framework está configurado para capturar **Screenshots** e **Traces** automáticos de cada etapa do teste.

### Pré-requisitos
* Node.js instalado (v18+)

### Como rodar os testes localmente
1. Instalar as dependências do projeto:
   ```bash
   npm install
   ```
2. Executar os testes em modo visível (*Headed*):
   ```bash
   npx playwright test --headed
   ```
3. Abrir o relatório HTML interativo com as evidências:
   ```bash
   npx playwright show-report
   ```
