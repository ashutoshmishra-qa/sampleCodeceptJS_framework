const { I } = inject();


module.exports = {

    locators: {
        name: (locate('#data-set-create__name').as('Enter Name')),
        parent: (locate('#data-set-create__parent').as('Enter Name')),
        description: (locate('#data-set-create__description').as('Enter Desciption')),
        schemaType: (locate('#data-set-create__type').as('Select Schema Type')),
        selectCustomSchemaType:(locate({ css: 'option[value=scratch]' }).as('Custom schema Type selected')),
        schemaName: (locate({name: 'property[0]__name' }).as('Enter Name')),
        createButton: (locate({ css: 'input[type=submit]' }).as('Create Button')),
        overviewNavButton: (locate('.route-name').as('click on Overview button in Left Nav')),
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Create Data Set - Catalyst Affinity');
    },
    createDataset() {
        I.wait(2);
        I.fillField(this.locators.name, 'Test Dataset');
        I.fillField(this.locators.description, 'This is a Dataset created by Automated test ');
        I.click(this.locators.schemaType);
        I.click(this.locators.selectCustomSchemaType);
        I.wait(5);
        I.fillField(this.locators.schemaName, 'Name');
        I.seeElement(this.locators.createButton);
        I.click(this.locators.createButton);
        I.waitForInvisible(this.locators.createButton);
    },

    createGenericDataset() {
        I.wait(1);
        I.fillField(this.locators.name, 'Test Dataset');
        I.fillField(this.locators.description, 'This is a Dataset created by Automated test ');
        I.click(this.locators.schemaType);
        I.click(this.locators.selectCustomSchemaType);
        I.fillField(this.locators.schemaName, 'Name');
        I.clearField(this.locators.parent);
        I.seeElement(this.locators.createButton);
        I.click(this.locators.createButton);
        I.waitForInvisible(this.locators.createButton);
    }
}