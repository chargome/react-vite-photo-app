/// <reference types="cypress" />

context('Photo App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('allows adding single photo file', () => {
    cy.contains('Click here to choose files').selectFile(
      [
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file1.png',
          lastModified: Date.now(),
        },
      ]);
    
    cy.contains('file1.png');
  });

  it('allows adding multiple photo files', () => {
    cy.contains('Click here to choose files').selectFile(
      [
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file1.png',
          lastModified: Date.now(),
        },
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file2.png',
          lastModified: Date.now(),
        },
      ]);
      cy.contains('file1.png');
      cy.contains('file2.png');
  });

  it('allows uploading photo files', () => {
    cy.contains('Click here to choose files').selectFile(
      [
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file1.png',
          lastModified: Date.now(),
        },
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file2.png',
          lastModified: Date.now(),
        },
      ]);
      
    cy.contains('Upload').click();
  });

  it('allows filtering photo files', () => {
    cy.contains('Click here to choose files').selectFile(
      [
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file1.png',
          lastModified: Date.now(),
        },
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file2.png',
          lastModified: Date.now(),
        },
      ]);
      
    cy.contains('Upload').click();
    cy.contains('file1.png');
    cy.contains('file2.png');
    cy.get('[data-testid="query-input"]').type('file1');
    cy.contains('file1.png');
    cy.contains('file2.png').should('not.exist');
  });
});
