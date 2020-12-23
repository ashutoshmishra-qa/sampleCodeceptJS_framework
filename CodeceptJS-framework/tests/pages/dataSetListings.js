const { I } = inject();


module.exports = {

    locators: {
        searchBar: (locate('#search-query').as('Search Bar')),
        addAnotherDatasetButton: (locate('#data-set-create').as('click add another data set button')),
        searchDropdown: (locate('.absolute').as('Confirm email')),
        includeGenericCheckmark: (locate('.checkmark').as('Tick Include generic checkbox')) 
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Data set Listing - Catalyst Affinity')
    },
    clicktoAddanotherDataset() {
        I.seeElement(this.locators.searchBar);
        I.seeElement(this.locators.addAnotherDatasetButton);
        I.click(this.locators.addAnotherDatasetButton);
        I.waitForInvisible(this.locators.addAnotherDatasetButton);
    }
}