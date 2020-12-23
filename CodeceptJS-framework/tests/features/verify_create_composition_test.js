Feature('Create Composition Profile');
// This Testcase verifies creation of Composition Profile 
Before((I) => {
    I.amOnPage('/');
});

Scenario('Verify creating composition profile', (I, loginPage, profileSwitcherPage, createProfilePage, profileOverviewPage) => {
    I.wait(2);
    loginPage.validatePage();
    loginPage.loginToApp(); // login to the application
    console.log('User authentication successful');
    profileSwitcherPage.validatePage();
    profileSwitcherPage.createSystem();
    createProfilePage.createSystem(); // create system profile
    I.wait(2);
    console.log('Root System Profile created');
    I.wait(2);
    profileOverviewPage.validatePage();
    profileOverviewPage.validateLeftNav();
    profileOverviewPage.createProfile();
    I.wait(2);
    createProfilePage.validatePage();
    createProfilePage.createFacility();// create facility child profile
    console.log('Child Facility Profile created');
    I.wait(2);
    profileOverviewPage.createProfile();
    createProfilePage.validatePage();
    createProfilePage.createFacility(); //create second child facility
    console.log('Second Child Facility  Profile created');
    I.wait(2);
    profileOverviewPage.createProfile();
    createProfilePage.validatePage();
    createProfilePage.createComposition(); // create composition
    I.wait(2);
    profileOverviewPage.validatePage();
    profileOverviewPage.validateCompositionCreation();
    console.log('Composition Profile created');
    I.wait(2);
    profileOverviewPage.createProfile();
    createProfilePage.validatePage();
    createProfilePage.createComposition();
    createProfilePage.errorVerify(); 
})