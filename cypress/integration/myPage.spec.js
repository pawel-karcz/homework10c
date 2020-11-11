/// <reference types="cypress" />

const Page = require('../page_objects/Page');
const page = new Page();

describe('My page', () => {
    beforeEach(() => {
        page.openHomePage();
        page.openCareersTab()
    })

    it("There is exactly 1 'QA Automation Engineer' role open", () => {
        page.validateRoleCount('QA Automation Engineer', 1)
    })

    it("Each result contains searched text", () => {
        page.typeInSearchJobInput('Automation');
        page.validateEachResultContains('Automation')
    })

})

