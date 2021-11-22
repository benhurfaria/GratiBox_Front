/* eslint-disable no-undef */
import faker from 'faker';

describe('Login', () => {
  const password = faker.internet.password();
  const email = faker.internet.email();
  const name = faker.name.findName();
  it('Should signin a user', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Quero começar').click();
    cy.url().should('equal', 'http://localhost:3000/sign-up');
    cy.get('input[placeholder=Nome]').type(name);
    cy.get('input[placeholder=Email]').type(email);
    cy.get('input[placeholder=Senha]').type(password);
    cy.get('input[placeholder="Confirme a senha"]').type(password);
    cy.contains('Cadastrar').click();
    cy.url().should('equal', 'http://localhost:3000/sign-in');
  });
});
