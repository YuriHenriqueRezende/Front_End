const el = {
  homeContainer: ()=> cy.get("#home-page"),
  mineButton: ()=> cy.get("#order"),
  buildContainer: ()=> cy.get("#build-pago")
}


describe('testing home page', () => {
  it('accessing home page', () => {
    cy.visit('/')
    cy.get("#home-page").should('exist')

  })
})

it('testing mine button', () => {
  cy.visit('/')
  el.homeContainer().should('exist')
  el.mineButton().click()
})