const { I } = inject();


module.exports = {

    locators: {
        searchBar: (locate('#search-query').as('Search Bar')),
        addAnotherProfileButton: (locate('#profile-create').as('click add another profile button')),
        searchDropdown: (locate('.absolute').as('Confirm email')),
        typeDropdown: (locate('#profile-type').as('Tick Include generic checkbox')),
        selectCompositionType: (locate({ css: 'option[value=COMPOSITION]' }).as('Composition Type selected')),
        selectFacilityType: (locate({ css: 'option[value=FACILITY]' }).as('Facility Type selected')),
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Facilities- Catalyst Affinity')
    },

    clicktoAddanotherDataset() {
        I.seeElement(this.locators.searchBar);
        I.seeElement(this.locators.addAnotherProfileButton);
        I.click(this.locators.addAnotherProfileButton);
        I.wait(2)
    }
}