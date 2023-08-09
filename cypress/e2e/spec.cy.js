describe('Test form on the Contact page', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('Name field is required', () => {
    cy.visit('https://newwavedevs.com')
    
    cy.get('.navbar-collapse__nav')
    .contains('Hire Us')
    .click()
    
    cy.get('.tabsLine')
    .contains('Web design')
    .click()
    
    cy.get('.tabsLine')
    .contains('app from scratch')
    .click()
    
    cy.get('input[type="email"]')
    .type('test@test.com')
    
    cy.get('.submitGroup')
    .contains('Apply now')
    .click()
    
    cy.get('.formGroup.withLabel')
    .should('have.class', 'error')
  })
})

