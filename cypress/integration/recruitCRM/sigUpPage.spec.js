describe('Sign Up', function() {
    it('Visit Sign Up page', function() {
      cy.visit('https://dev.recruitcrm.io/signup')
      cy.get('#userFirstName').type('xxx')
      cy.get('#userEmail').type('xxx108@gmail.com')
      cy.get('#userPassword').type('123456')
     cy.get('button').click()
    })

    it('Create Account', function() {

      cy.get('[name=title]').type('rCRM_Test')
      //cy.get('[placeholder=Search Timezone]')
      cy.get(':nth-child(1) > .field > .autocomplete > .control > .input')
        .type('India')
      cy.get('a.dropdown-item > span>b')
        .contains('India')
        .click()
      //cy.get('[placeholder="Search Currency]')
      cy.get(':nth-child(2) > .field > .autocomplete > .control > .input')
      .type('Rupees (₹ - India)')
      cy.get('a.dropdown-item > span>b')
        .contains('Rupees')
        .click()
   cy.get('.button')
      .contains('Next')
      .click()
    })
  })