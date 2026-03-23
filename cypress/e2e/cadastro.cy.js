import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade cadastro no Hub de leitura', () => {

  beforeEach(() => {
    cadastroPage.visitarPaginaCadastro()
});

    it('Deve fazer cadastro com sucesso usando função JS', () => {
        let email = `aline${Date.now()}@example.com`

        cy.get('#name').type('Aline Vieira')
        cy.get('#email').type(email)
        cy.get('#phone').type('(48) 99102-1014')
        cy.get('#password').type('Teste123@')
        cy.get('#confirm-password').type('Teste123@')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()

        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso usando faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email().toLowerCase()

        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('(48) 99102-1014')
        cy.get('#password').type('Teste123@')
        cy.get('#confirm-password').type('Teste123@')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()

        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('be.visible').and('contain', nome)
    });

    it('Deve fazer cadastro com sucesso usando comando customizado', () => {
        let email = `aline${Date.now()}@example.com`

        cy.preencherCadastro(
            'Aline Vieira Souza Bierhals',
            email,
            '(48) 99102-1014',
            'Teste123@',
            'Teste123@'
        )

        cy.url().should('include', 'dashboard')
        cy.get('#user-name')
          .should('be.visible')
          .and('contain', 'Aline Vieira Souza Bierhals')
    });

it('Deve fazer cadastro com sucesso usando Page Objects', () => {
    let email = `aline${Date.now()}@example.com`
    cadastroPage.preencherCadastro( 
        'Aline Vieira Souza Bierhals',
        email,
        '(48) 99102-1014',
        'Teste123@',
        'Teste123@')
       cy.url().should('include', 'dashboard')
});

});
