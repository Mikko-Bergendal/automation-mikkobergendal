///<reference types="cypress" />

const titleOfCreateClientPage = 'Testers Hotel'
const nameTextField = ':nth-child(1) > input'
const mailTextField = ':nth-child(2) > input'
const phoneTextField = ':nth-child(3) > input'
const saveButton = '.blue'

function checkTitleOfCreateClientPage(cy){
    cy.title().should('eq', titleOfCreateClientPage)
}

function createClient(cy, clientname, clientmail, clientphone, contentToConfirm){
    cy.get(nameTextField).type(clientname)
    cy.get(mailTextField).type(clientmail)
    cy.get(phoneTextField).type(clientphone)
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)
}

module.exports = {
    checkTitleOfCreateClientPage,
    createClient
}