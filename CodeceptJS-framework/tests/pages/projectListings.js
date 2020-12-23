const { I } = inject();


module.exports = {

    locators: {
        searchBar: (locate('#search-query').as('Search Bar')),
        addAnotherProjectButton: (locate('#project-create').as('click add another project button')),
        searchDropdown: (locate('.absolute').as('Search dropdown button')),
        includeArchiveCheckbox: (locate('#include-archived').as('Tick checkbox - Include Archive')),
        searchProfile: (locate('#name').as('searchBox for parent profile'))
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Project Listing - Catalyst Affinity')
    },

    clicktoAddanotherProject() {
        I.seeElement(this.locators.searchBar);
        I.seeElement(this.locators.addAnotherProjectButton);
        I.click(this.locators.addAnotherProjectButton);
        I.wait(2)
    }
}