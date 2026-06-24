# 🎭 Automação de Checkout Cross-Browser com Playwright

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=white)
![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=white)


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

## 🔌 Testes de API
Além dos testes E2E de UI, o projeto também inclui automação de testes de API utilizando **JSONPlaceholder** como serviço mock.

* Implementação de **Service Layer (PostsService)** para abstração das requisições
* Validação de status HTTP e contrato de resposta
* Estrutura preparada para evolução para testes de integração reais


---


## 📊 Execução e Relatórios Visuais
O framework está configurado para capturar **Screenshots** e **Traces** automáticos de cada etapa do teste.

---

### 📈 Playwright HTML Report
Geração automática de relatório detalhado com evidências de execução:
```bash
npx playwright test
npx playwright show-report
```

---

## 📊 Allure Report (avançado)

O projeto também integra o **Allure Report**, permitindo visualização profissional dos testes com:

- Steps detalhados de execução  
- Attachments de request/response  
- Status de execução por cenário  
- Dashboard interativo de resultados  



---


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
