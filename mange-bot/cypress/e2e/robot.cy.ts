/// <reference types="cypress" />


const el = {
  homeContainer: ()=> cy.get("#home-page"),
  mineButton: ()=> cy.get("#order"),
  buildContainer: ()=> cy.get("#build-page"),
  flag: ()=> cy.get("header #flag"),
  homeTitle: ()=> cy.get("#home-page #title"),
  partImagesArray: ()=> cy.get(".part .part-image")
}


describe('testing home page', () => {
  beforeEach(()=> {
    cy.visit('/')
  })
  
  it('accessing home page', () => {   
    el.homeContainer().should('exist')      
  })

  it('testing mine button', () => {        
    el.mineButton().click()
    el.buildContainer().should('exist')      
  })

  it('testing translate button', () => {        
    el.homeTitle().should("contain.text","Build now your Mange Bot!")
    el.flag().click()
    el.homeTitle().should("contain.text","Construa agora seu Mange Bot!")
  })

})

describe('testing build page', () => {
  beforeEach(()=> {
    cy.visit('/build')
  })
  
  it('accessing home page', () => {   
    el.buildContainer().should('exist')
  })

  it('checking backend parts', ()=> {
    const images = el.partImagesArray();
    images.should('have.length',5).each($img=>{
      const img = cy.wrap($img);
      img.should('exist');
      img.should('have.attr','src')

      const sourceImage = $img.attr('src');
      console.log(sourceImage);
      if (!sourceImage){
        throw new Error('Source is empty')


      
      }
    })
  })
})