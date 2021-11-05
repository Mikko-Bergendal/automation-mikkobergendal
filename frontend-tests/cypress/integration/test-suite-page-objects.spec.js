/// <reference types="cypress" />

import faker from 'faker'
import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as clientFuncs from '../pages/clientsPage'
import * as createClientFuncs from '../pages/createClientPage'


describe('test suite1', function(){
    beforeEach(function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
    })
    it('Login and view rooms', function(){
        indexFuncs.performValidLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        dashBoardFuncs.viewRooms(cy, 'Rooms')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
    it('Login and view clients', function(){
        indexFuncs.performValidLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        dashBoardFuncs.viewClients(cy, 'Clients')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
    it('Login and view reservations', function(){
        indexFuncs.performValidLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        dashBoardFuncs.viewReservations(cy, 'Reservations')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
    it('Login and view bills', function(){
        indexFuncs.performValidLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        dashBoardFuncs.viewBills(cy, 'Bills')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
    it('Create client', function(){
        indexFuncs.performValidLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        dashBoardFuncs.viewClients(cy, 'Clients')
        clientFuncs.goToCreate(cy, 'New Client')
        createClientFuncs.createClient(cy, 'Mikko', 'MB@mail.se', '070123456', 'Clients')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
})
