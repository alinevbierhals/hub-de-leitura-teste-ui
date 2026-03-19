describe('Funcionalidade contato', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/index.html')
  });

  it('Deve preencher o formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Maria')
    cy.get('[name="email"]').type('maria@example.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Gostaria de saber mais sobre a parcerias.')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('be.visible')
  })

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('maria@example.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Gostaria de saber mais sobre a parcerias.')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('[name="name"]').type('Maria')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Gostaria de saber mais sobre a parcerias.')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Maria')
    cy.get('[name="email"]').type('maria@example.com')
    cy.get('[name="subject"]').select('')
    cy.get('[name="message"]').type('Gostaria de saber mais sobre a parcerias.')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Maria')
    cy.get('[name="email"]').type('maria@example.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
  });

});