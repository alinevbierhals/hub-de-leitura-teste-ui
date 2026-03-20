
// import user from "../fixtures/usuario.json"

describe('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login.html')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer login com sucesso usando comando customizado', () => {
        cy.login('usuario@teste.com', 'user123')
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer login com sucesso com conta admin', () => {
        cy.login('admin@biblioteca.com', 'admin123')
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.fixture('usuario').then((user) => {
            cy.login(user.email, user.senha)
            cy.url().should('include', 'dashboard')
            cy.get('#user-name').should('be.visible')
        })
    })
});