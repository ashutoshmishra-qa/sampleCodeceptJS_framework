const { I } = inject();


module.exports = {
    locators: {
        searchBox: (locate('#profile-search').as('Search Box')),
        createSystemButton: (locate('#system-create').as('Create a Root System Button')),
        CreateFacilityButton: (locate('#facility-create').as('Create a Root Facility Button')),
        searchedProfile: (locate('#profile__name').as('Searched item '))
    },
    validatePage() {
        I.wait(2),
        I.seeTitleEquals('Pick Profile - Catalyst Affinity'),
        I.retry(5).seeElement(this.locators.searchBox)
    },
    createSystem() {
        I.seeElement(this.locators.createSystemButton),
        I.click(this.locators.createSystemButton),
        I.waitForInvisible(this.locators.createSystemButton)
    },
    createFacility() {
        I.waitForElement(this.locators.CreateFacilityButton),
        I.click(this.locators.CreateFacilityButton),
        I.waitForInvisible(this.locators.CreateFacilityButton)
    },
    searchProfile(text) {
        I.see(this.locators.searchBox),
        I.click(this.locators.searchBox),
        I.fillField(this.locators.searchBox, text),
        I.click(this.locators.searchedProfile)
    }
}