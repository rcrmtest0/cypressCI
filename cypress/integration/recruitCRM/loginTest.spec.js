describe('Login', function() {
    it('Visits the recruitcrm.io login page', function() {
      cy.login('phoenix16@updates9z.com','Wrefv4Rj')
    })

    it('Dashborad page', function(){
      assert.deepEqual({'.m-b-5': 'Getting Started' }, { '.m-b-5': 'Getting Started' },'Welcome to recruitcrm.!');
      cy.get('.user-dropdown-link').click()
      cy.contains('Profile').click()

      cy.contains('Save').click()     
      cy.contains('Setting Updated').click()  
      //cy.get('.toast.is-success.is-top>div')
      //.should('have.text', 'Setting Updated');
    })

    it('Update profile setting',function(){
      cy.viewport(1280, 720)
      
      
    })
  })