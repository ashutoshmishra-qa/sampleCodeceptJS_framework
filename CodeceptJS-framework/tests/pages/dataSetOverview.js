const { I } = inject();


module.exports = {

    locators: {
        searchBar: (locate('#search-query').as('Search Bar')),
        addAnotherDatasetButton: (locate('#data-set-create').as('click on add another data set button')),
        searchDropdown: (locate('.absolute').as('Confirm email')),
        includeGenericCheckmark: (locate('.checkmark').as('Tick Include generic checkbox')) 
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Data Set Overview - Catalyst Affinity')
    },
    addAnotherDataset(){
        I.wait(2);
        I.seeElement(this.locators.addAnotherDatasetButton);
        I.retry(2).click(this.locators.addAnotherDatasetButton)
        I.waitForInvisible(this.locators.addAnotherDatasetButton);
    }    
} 