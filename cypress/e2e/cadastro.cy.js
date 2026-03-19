
import { faker } from '@faker-js/faker';

describe('Funcionslidade cadastro no Hub de leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso usando função JS', () => {
        let Email = `aline${Date.now()}@example.com`
        cy.get('[href="/register.html"]').click()
        cy.get('#name').type('Aline Vieira Souza Bierhals')
        cy.get('#email').type(Email)
        cy.get('#phone').type('(48) 99102-1014')
        cy.get('#password').type('Teste123@')
        cy.get('#confirm-password').type('Teste123@')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')

    })

    it.only('Deve fazer cadastro com sucesso usando faker', () => {
        let Nome = faker.person.fullName()
        let Email = faker.internet.email()
    cy.get('[href="/register.html"]').click()
    cy.get('#name').type(Nome)
    cy.get('#email').type(Email)
    cy.get('#phone').type('(48) 99102-1014')
    cy.get('#password').type('Teste123@')
    cy.get('#confirm-password').type('Teste123@')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', Nome)
    
})

    });