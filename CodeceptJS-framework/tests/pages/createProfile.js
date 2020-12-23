const { I } = inject();


module.exports = {

    locators: {
        name: (locate('#root-profile-create__name').as('Enter Name')),
        slug: (locate('#root-profile-create__slug').as('Enter Slug')),
        description: (locate('#root-profile-create__description').as('Enter Desciption')),
        createButton: (locate('.profile__create-button').as('Create Button')),
        profileType: (locate('#profile-create__type').as('Select Profile Type')),
        selectCompositionType: (locate({ css: 'option[value=COMPOSITION]' }).as('Composition Type selected')),
        nonRootName: (locate('#profile-create__name').as('Enter Name')),
        nonRootSlug: (locate('#profile-create__slug').as('Enter Slug')),
        nonRootDescription: (locate('#profile-create__description').as('Enter Desciption')),
        checkmark: (locate('.checkmark').as('Tick faciltity Profile')),
        checkmark2: (locate('.checkbox').at(2).as('Tick faciltity Profile2')),
        error: (locate('#profile-create__error').as('verify composition error for creating single constituent facility'))
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Create Profile - Catalyst Affinity');
    },
    createSystem() {
        var parentSlug = Date.now();
        I.waitForVisible(this.locators.name);
        I.fillField(this.locators.name, 'test system ' + parentSlug);
        I.fillField(this.locators.slug, 'test' + parentSlug);
        I.fillField(this.locators.description, 'This is a System created by Automated test');
        I.wait(2);
        I.seeElement(this.locators.createButton);
        I.retry(5).click(this.locators.createButton);
        //I.waitForInvisible(this.locators.createButton);
    },
    createRootFacility() {
        var parentSlug = Date.now();
        I.seeElement(this.locators.name);
        I.fillField(this.locators.name, 'test facility ' + parentSlug);
        I.fillField(this.locators.slug, 'test' + parentSlug);
        I.fillField(this.locators.description, 'This is a Root facility created by Automated test ');
        I.retry(2).seeElement(this.locators.createButton);
        I.click(this.locators.createButton);
        I.waitForInvisible(this.locators.createButton);
    },
    createFacility() {
        //var childSlug = Date.now();
        I.wait(1);
        I.fillField(this.locators.nonRootName, 'test childfacility ');
        //I.fillField(this.locators.nonRootSlug, 'test' + childSlug);
        I.fillField(this.locators.nonRootDescription, 'This is a NonRoot facility created by Automated test ');
        I.seeElement(this.locators.createButton);
        I.retry(3).click(this.locators.createButton);
        I.waitForInvisible(this.locators.createButton);
    },
    createComposition() {
        //var childSlug = Date.now();
        I.wait(1);
        I.fillField(this.locators.nonRootName, 'test composition ');
        //I.fillField(this.locators.nonRootSlug, 'test' + childSlug);
        I.fillField(this.locators.nonRootDescription, 'This is a Composition created by Automated test ');
        I.wait(2);
        I.click(this.locators.profileType);
        I.click(this.locators.selectCompositionType);
        I.click(this.locators.checkmark);
        I.click(this.locators.createButton);
        I.waitForElement(this.locators.error);
        I.seeElement(this.locators.error); // verify composition cannot be composed of single facility
        console.log('verified composition cannot be composed of single facility')
        I.wait(2);
        I.seeElement(this.locators.checkmark2);
        I.click(this.locators.checkmark2);
        I.seeElement(this.locators.createButton);
        I.click(this.locators.createButton);
        I.waitForInvisible(this.locators.createButton);
    },
    createLocation() {
        //var childSlug = Date.now();
        I.wait(1);
        I.fillField(this.locators.nonRootName, 'test location ');
        //I.fillField(this.locators.nonRootSlug, 'test' + childSlug);
        I.fillField(this.locators.nonRootDescription, 'This is a location created by Automated test ');
        I.seeElement(this.locators.createButton);
        I.click(this.locators.createButton);
        I.waitForInvisible(this.locators.createButton);
    },
    errorVerify(){
        I.wait(1);
        I.seeElement(this.locators.error); // verify that user sees an error on the page 
    }
}
