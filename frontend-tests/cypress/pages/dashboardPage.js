///<reference types="cypress" />

const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const roomsButton = ':nth-child(1) > .btn'
const clientsButton = '.blocks > :nth-child(2) > .btn'
const reservationButton = ':nth-child(4) > .btn'
const billsButton = ':nth-child(3) > .btn'

function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function viewRooms(cy, contentToConfirm){
    cy.get(roomsButton).click()
    cy.contains(contentToConfirm)
}

function viewClients(cy, contentToConfirm){
    cy.get(clientsButton).click()
    cy.contains(contentToConfirm)
}

function viewReservations(cy, contentToConfirm){
    cy.get(reservationButton).click()
    cy.contains(contentToConfirm)
}

function viewBills(cy, contentToConfirm){
    cy.get(billsButton).click()
    cy.contains(contentToConfirm)
}
    


module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    viewRooms,
    viewClients,
    viewReservations,
    viewBills
}