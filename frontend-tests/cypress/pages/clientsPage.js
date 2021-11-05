///<reference types="cypress" />

const titleOfClientsPage = 'Testers Hotel'
const createButton = 'h2 > .btn'

function checkClientsPage(cy){
    cy.title().should('eq', titleOfClientsPage)
}

function goToCreate(cy, contentToConfirm){
    cy.get(createButton).click()
    cy.contains(contentToConfirm)
}

module.exports = {
    checkClientsPage,
    goToCreate
}