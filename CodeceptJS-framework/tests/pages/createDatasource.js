const { I } = inject();


module.exports = {

    locators: {
        name: (locate('#data-source-create__name').as('Enter Name')),
        parent: (locate('#data-source-create__parent').as('Enter Name')),
        description: (locate('#data-source-create__description').as('Enter Desciption')),
        authTypeDropdown: (locate('#data-source-create__sftp-authentication-type').as('Enter Desciption')), 
        publicType: (locate({ css: 'option[value=PUBLIC]' }).as('Public Type selected')),
        host: (locate('#data-source-create__sftp-host').as('Enter Host')),
        port: (locate('#data-source-create__sftp-port').as('Enter Port')),
        username: (locate('#data-source-create__sftp-username').as('Enter username')),
        createButton: (locate({ css: 'input[type=submit]' }).as('Create Button')),
        overviewNavButton: (locate('.route-name').as('click on Overview button in Left Nav')),
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Create Data Source - Catalyst Affinity');
    },
    createDatasource() {
        I.wait(2);
        I.fillField(this.locators.name, 'Test Datasource');
        I.fillField(this.locators.description, 'This is a Datasource created by Automated test ');
        I.click(this.locators.authTypeDropdown);
        I.click(this.locators.publicType);
        I.fillField(this.locators.host, 'host');
        I.fillField(this.locators.port, 'port');
        I.fillField(this.locators.username, 'username');
        I.seeElement(this.locators.createButton);
        I.click(this.locators.createButton);
        I.wait(1);
    },
    createGenericDatasource() {
        I.seeElement(this.locators.name);
        I.fillField(this.locators.name, 'Test Datasource');
        I.clearField(this.locators.parent);
        I.fillField(this.locators.description, 'This is a Datasource created by Automated test ');
        I.click(this.locators.authTypeDropdown);
        I.click(this.locators.publicType);
        I.fillField(this.locators.host, 'host');
        I.fillField(this.locators.port, 'port');
        I.fillField(this.locators.username, 'username');
        I.seeElement(this.locators.createButton);
        I.click(this.locators.createButton);
        I.wait(2);
    }
}