describe('Login', function() {
    it('Log into recruitCRM', function() {
      //cy.viewport(1280, 720)
      cy.visit('https://dev.recruitcrm.io/login')
      cy.get('[name=email]').type('phoenix16@updates9z.com')    //phoenix16@updates9z.com
      cy.get('[name=password]').type('Wrefv4Rj')                      //Wrefv4Rj
      cy.get('.button.is-primary.btn-login').click()
    })

    /*

    it('Should be on dashborad page', function() {
      cy.viewport(1280, 720)
      cy.get('.m-b-5')
      .should('have.text', 'Getting Started')
    })
    */

    it('Click on candidate link from side navbar',function(){
      //cy.viewport(1280, 720)

      cy.get(':nth-child(1) > :nth-child(2) > .is-dark > .menu-link > .material-icons').click()
      cy.get('.field > :nth-child(1) > .button').click()
    })


    it('Add cadidate',function(){
      //cy.viewport(1280, 720)

      cy.get(':nth-child(2) > :nth-child(1) > .field > .control > .input').type('Sandeep11')
      cy.get(':nth-child(2) > :nth-child(2) > .field > .control > .input').type('Patil11')
      cy.get(':nth-child(3) > :nth-child(1) > .field > .control > .input').type('sp11@gmail.com')
      cy.get(':nth-child(3) > :nth-child(2) > .field > .control > .input').type('1234567890')
      cy.get('.modal-card-foot > .is-primary').click()
    })

  })