describe('Datepicker', function() {
    it('Vue js datepicker', function() {
      cy.visit('https://buefy.github.io/documentation/datepicker')

      cy.get(':nth-child(1) > .example > .example-component > :nth-child(1) > .datepicker > .dropdown > .dropdown-trigger > .control > .input').click()
     // cy.get('[name=email]').type('phoenix16@updates9z.com')    //phoenix16@updates9z.com
     // cy.get('[name=password]').type('Wrefv4Rj')                      //Wrefv4Rj
     // cy.get('.button.is-primary.btn-login').click()
    })
})