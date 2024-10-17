/// <reference types="cypress" />


const el = {
  homeContainer: ()=> cy.get("#home-page"),
  mineButton: ()=> cy.get("#order"),
  buildContainer: ()=> cy.get("#build-page"),
  flag: ()=> cy.get("header #flag"),
  homeTitle: ()=> cy.get("#home-page #title"),
  partImagesArray: ()=> cy.get(".part .part-image"),
  partSelectorArray: ()=> cy.get(".part"),
  buttomParts: {
    next: () => cy.get(".next-selector"),
    previous: () => cy.get(".prev-selector"),
  }
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

  it('checking part chaning', () => {
    const partSelectors = el.partSelectorArray();
    partSelectors.each($part=>{
      const part = cy.wrap($part);
      const image = ()=> part.get("img");
      const next = part.get(".next-selector");
      const previous = part.get(".prev-selector");
  
      let imageId;
      let newImageId;

      image().each($img=> imageId=$img.attr('image-id'));
      next.click();
      image().each($img=> newImageId=$img.attr('image-id'))
      console.log("old imageId", imageId)
      console.log("new imageId", newImageId)
    })
  })
})