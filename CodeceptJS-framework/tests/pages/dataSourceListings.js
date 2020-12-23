const { I } = inject();

module.exports = {

    locators: {
        searchBar: (locate('#search-query').as('Search Bar')),
        addAnotherDatasourceButton: (locate('#data-source-create').as('click add another data source button')),
        searchDropdown: (locate('.absolute').as('Confirm email')),
        includeGenericCheckmark: (locate('.checkmark').as('Tick checkbox -Include Generic')),
        searchProfile: (locate('#parent').as('searchBox for parent profile'))
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Data source Listing - Catalyst Affinity')
    },
    clicktoAddanotherDatasource() {
        I.seeElement(this.locators.searchBar);
        I.seeElement(this.locators.addAnotherDatasourceButton);
        I.click(this.locators.addAnotherDatasourceButton);
        I.waitForInvisible(this.locators.addAnotherDatasourceButton);
    }
}