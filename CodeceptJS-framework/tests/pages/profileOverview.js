const { I } = inject();

module.exports = {

    locators: {
        overviewNavButton: ('.route-name'),
        profileNavButton: ('a[href="/profiles"]'),
        projectNavButton: ('a[href="/projects"]'),
        datasetNavButton: ('a[href="/data-sets"]'),
        datasourceNavButton: ('a[href="/data-sources"]'),
        createProjectButton: ('.project-create'),
        createProfileButton: ('.child-create'),
        childfacilityTag: ('.profile__type'),
        compositonfacilityTag: ('.profile__type'),
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Profile Overview - Catalyst Affinity')
    },
    validateLeftNav() {
        I.seeElement(this.locators.profileNavButton),
        I.seeElement(this.locators.projectNavButton),
        I.seeElement(this.locators.datasetNavButton),
        I.seeElement(this.locators.datasourceNavButton)
    },
    createDataset() {
        I.waitForVisible(this.locators.datasetNavButton),
        I.click(this.locators.datasetNavButton)
        I.wait(2)
    },
    createDatasource() {
        I.seeElement(this.locators.datasourceNavButton),
        I.click(this.locators.datasourceNavButton),
        I.wait(2);
    },
    createProject() {
        I.seeElement(this.locators.overviewNavButton),
        I.click(this.locators.overviewNavButton),
        I.seeElement(this.locators.createProjectButton),
        I.click(this.locators.createProjectButton),
        I.waitForInvisible(this.locators.createProjectButton)
    },
    createProfile() {
        I.seeElement(this.locators.overviewNavButton),
        I.click(this.locators.overviewNavButton),
        I.seeElement(this.locators.createProfileButton),
        I.click(this.locators.createProfileButton),
        I.waitForInvisible(this.locators.createProfileButton)
    },
    createProjectofChildFacility() {
        I.wait(4);
        I.seeElement(this.locators.childfacilityTag),
        I.seeElement(this.locators.createProjectButton),
        I.click(this.locators.createProjectButton),
        I.waitForInvisible(this.locators.createProjectButton)
    },
    createProfileofChildFacility() {
        I.seeElement(this.locators.childfacilityTag),
        I.seeElement(this.locators.createProfileButton),
        I.click(this.locators.createProfileButton),
        I.waitForInvisible(this.locators.createProfileButton)
    },
    validateSystemCreation() {
        I.seeElement(this.locators.childfacilityTag),
        I.see('SYSTEM');
    },
    validateFacilityCreation() {
        I.seeElement(this.locators.childfacilityTag),
        I.see('FACILITY');
        I.seeElement(this.locators.createProjectButton),
        I.seeElement(this.locators.createProfileButton)
    },
    validateCompositionCreation() { 
        I.seeElement(this.locators.createProjectButton),
        I.seeElement(this.locators.childfacilityTag),
        I.see('COMPOSITION');
        I.dontSeeElement(this.locators.createProfileButton),// validate profile can not be created on composition page 
        I.seeElement(this.locators.createProjectButton)
    },
    validateLocationCreation() {
        I.seeElement(this.locators.childfacilityTag),
        I.see('LOCATION');
        I.dontSeeElement(this.locators.createProjectButton),
        I.dontSeeElement(this.locators.createProfileButton)
    }
}