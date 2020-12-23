const { I } = inject();


module.exports = {

    locators: {
        searchBar: (locate('#search-query').as('Search Bar')),
        addAnotherDatasourceButton: (locate('.add-button').as('click add another data set button')),
        searchDropdown: (locate('.absolute').as('Confirm email')),
        checkmark: (locate('.checkmark').as('Tick Include generic checkbox')) 
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Data Source Overview - Catalyst Affinity')
    },
    addAnotherDatasource(){
        I.waitForElement(this.locators.addAnotherDatasourceButton);
        I.seeElement(this.locators.addAnotherDatasourceButton);
        I.click(this.locators.addAnotherDatasourceButton);
        I.waitForInvisible(this.locators.addAnotherDatasourceButton);
    }    
}