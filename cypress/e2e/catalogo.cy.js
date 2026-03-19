describe('Funcionalidade de catálogo no Hub de leitura', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/catalog.html')
    });

    it('Deve adicionar um item à cesta com sucesso', () => {
        // Clica no botão do primeiro item do catálogo
        cy.get('.card').first().find('.btn-primary').click()

        // Valida se o contador do carrinho foi atualizado
        cy.get('#cart-count').should('contain', '1')
    });

    it('Deve adicionar múltiplos itens à cesta', () => {
        // Clica em dois produtos
        cy.get('.card').eq(0).find('.btn-primary').click()
        cy.get('.card').eq(1).find('.btn-primary').click()

        // Valida se o carrinho tem 2 itens
        cy.get('#cart-count').should('contain', '2')
    });

    it('Deve clicar em todos os botões Adicionar à cesta', () => {
        // Clica em todos os produtos
        cy.get('.card').find('.btn-primary').click({ multiple: true })

        // Valida se o carrinho tem 12 itens
        cy.get('#cart-count').should('contain', '12')
    });

    it('Deve clicar no nome no livro e direcionar para a tela do livro', () => {
        cy.contains('A Metamorfose').click()
        cy.url().should('include', 'book-details.html?id=15')
        cy.get('#add-to-cart-btn').click()
        cy.get('#cart-count').should('contain', '1')
    });
});