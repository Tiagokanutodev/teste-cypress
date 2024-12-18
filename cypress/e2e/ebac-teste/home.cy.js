/// <reference types="cypress" />

describe('Testes para a página de agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    });

    it('Deve incluir um novo contato', () => {
        const nome = 'João Silva'
        const telefone = '999999999'
        const email = 'joao.silva@email.com'

        cy.get('input[placeholder="Nome"]').type(nome)
        cy.get('input[placeholder="Telefone"]').type(telefone)
        cy.get('input[placeholder="E-mail"]').type(email)
        cy.get('button.adicionar').click()
        cy.get('ul.sc-eDDNvR.cTVgex li').should('have.length.greaterThan', 0)
        cy.get('ul.sc-eDDNvR.cTVgex li').should('contain', nome)
    });
});

describe('Testes para a página de agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    });

    it('Deve alterar um contato', () => {
        const nome = 'João Silva'
        const telefoneAlterado = '11987654321'
        const emailAlterado = 'joao.silva@alterado.com'

        cy.contains(nome)
            .parents('div.contato')
            .find('button.edit')
            .click();
        cy.get('input[placeholder="Telefone"]').clear().type(telefoneAlterado);
        cy.get('input[placeholder="E-mail"]').clear().type(emailAlterado);
        cy.get('button.alterar').click();
        cy.contains(nome)
            .parents('div.contato')
            .find('li')
            .should('contain', telefoneAlterado)
            .should('contain', emailAlterado);
    });
});

describe('Testes para a página de agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    });

    it('Deve remover um contato', () => {
        const nome = 'João Silva'

        cy.contains(nome)
            .parents('div.contato')
            .find('button.delete')
            .click();
        cy.contains(nome).should('not.exist');
    });
});

