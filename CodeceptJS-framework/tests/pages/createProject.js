const { I } = inject();


module.exports = {

    locators: {
        name:(locate('#project-create__name').as('Enter Name')),
        description:(locate('#project-create__description').as('Enter Desciption')),
        createButton:(locate({css: 'input[type=submit]' }).as('Create Button')),
        overviewNavButton: (locate('.route-name').as ('click on Overview button in Left Nav')),
        addFirstDataset: (locate('#profile-create__data-set[0]--add').as ('click to add first Dataset in the list'))
    },

    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Create Project - Catalyst Affinity');
    },
    createProject() { 
        I.wait(1);
        I.fillField(this.locators.name, 'Test project');         
        I.fillField(this.locators.description, 'This is a Project created by Automated test ');
        I.click(this.locators.createButton);
        I.waitForInvisible(this.locators.createButton);
    }
}