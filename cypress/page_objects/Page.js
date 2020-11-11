/// <reference types="cypress" />

module.exports = class Page {
    constructor() {
        this.url = 'https://10clouds.com';
        this.tabs = '.nav-link-container';
        this.input = 'input';
        this.results = '.job-offers__wrapper a'
    }

    openHomePage() {
        cy.visit(this.url);
    }

    openCareersTab() {
        cy.get(this.tabs).contains('Careers').click()
    }

    validateRoleCount(roleName, number) {
        cy.get(this.results).filter(`:contains("${roleName}")`).should('have.length', number)
    }

    typeInSearchJobInput(text) {
        cy.get(this.input).type(text)
    }

    validateEachResultContains(text) {
        cy.get(this.results).each(result => expect(result.text()).to.contain(text))
    }
}


