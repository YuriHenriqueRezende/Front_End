/// <reference types="cypress" />

const el = {
    homeButton: 'a:contains("Home")',   
    contaButton: 'a:contains("Conta")',
    motosButton: 'a:contains("Motos")',
    loginButton: 'a:contains("Login")',
};

describe('Teste da barra de navegação', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173'); 
    });
  
    it('Deve navegar para a página Home', () => {
      cy.get(el.homeButton).click(); 
      cy.url().should('include', '/home'); 
    });
  
    it('Deve navegar para a página Conta', () => {
      cy.get(el.contaButton).click(); 
      cy.url().should('include', '/conta');
    });
  
    it('Deve navegar para a página Motos', () => {
      cy.get(el.motosButton).click(); 
      cy.url().should('include', '/motos'); 
    });
  
    it('Deve navegar para a página Login', () => {
      cy.get(el.loginButton).click(); 
      cy.url().should('include', '/login');
    });
  });