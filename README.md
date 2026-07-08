# 📚 Hub de Leitura — Testes Automatizados E2E

Suíte de testes end-to-end (E2E) desenvolvida com **Cypress** para validar os principais 
fluxos do **Hub de Leitura**, uma aplicação de portal de livros utilizada como 
projeto de treinamento prático de QA (fornecida pela **EBAC-QE**).

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/) — framework de testes E2E
- **GitHub Actions** — pipeline de CI/CD, executando os testes automaticamente a cada push
- **JavaScript**
- Padrão **Page Object** para organização dos testes

## 📋 Fluxos testados

- ✅ **Cadastro** de usuário (`cadastro.cy.js`)
- ✅ **Login** (`login.cy.js`)
- ✅ **Catálogo de livros** (`catalogo.cy.js`)
- ✅ **Busca no catálogo** (`catalogo-busca.cy.js`)
- ✅ **Formulário de contato** (`contato.cy.js`)

## 🚀 Como rodar os testes

Este repositório contém apenas os **testes automatizados**. A aplicação testada 
("Hub de Leitura") é um projeto de treinamento fornecido pela **EBAC-QE**:

🔗 Repositório da aplicação: https://github.com/EBAC-QE/hub-de-leitura-integrado

```bash
# 1. Clone e inicie o servidor da aplicação
git clone https://github.com/EBAC-QE/hub-de-leitura-integrado.git
cd hub-de-leitura-integrado
npm install
npm start
# Aplicação disponível em http://localhost:3000

# 2. Em outro terminal, instale as dependências deste repositório de testes
cd hub-de-leitura-teste-ui
npm install

# 3. Rode os testes em modo interativo (Cypress abre uma janela)
npx cypress open

# 4. Ou rode em modo headless (linha de comando, usado no CI/CD)
npx cypress run
```

## 📂 Estrutura do projeto

```
cypress/
├── e2e/                  # Specs de teste
│   ├── cadastro.cy.js
│   ├── login.cy.js
│   ├── catalogo.cy.js
│   ├── catalogo-busca.cy.js
│   └── contato.cy.js
├── fixtures/             # Massa de dados para os testes
│   ├── livros.json
│   └── usuario.json
├── pages/                # Page Objects
│   └── cadastro-page.js
└── support/
    ├── commands.js       # Comandos customizados
    └── e2e.js
```

## 🔄 CI/CD

Os testes são executados automaticamente a cada push através de um workflow configurado 
em `.github/workflows`, garantindo que os fluxos principais continuem funcionando a 
cada alteração no código.
