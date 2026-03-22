describe('Busca funcionalidade catalogo', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/catalog.html')
    });

    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.contains('1984').should('be.visible')
    });

    it('Deve fazer a busca de um livro do arquivo de massa de dados', () => {
        cy.fixture('livros').then((catalogo) => {
            cy.get('#search-input').type(catalogo[0].livro)
            cy.contains(catalogo[0].livro).should('be.visible')
        })
    });

    it('Deve fazer a busca de um livro usando fixture', () => {
        cy.fixture('livros').then((catalogo) => {
            cy.get('#search-input').type(catalogo[1].livro)
            cy.contains(catalogo[1].livro).should('be.visible')
        })
    });

    it.only('Deve validar todos os livros da lista', () => {
        cy.fixture('livros').then((catalogo) => {
            catalogo.forEach((item) => {
                cy.get('#search-input').clear().type(item.livro)
                cy.contains(item.livro).should('be.visible')
            })
        })
    });

}); 