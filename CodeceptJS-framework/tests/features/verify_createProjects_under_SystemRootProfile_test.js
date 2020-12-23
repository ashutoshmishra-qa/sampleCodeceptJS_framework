Feature('Create Projects under profiles created');
// This Testcase verifies creation of Projects 
Before((I) => { // or Background
    I.amOnPage('/');
});

Scenario('Verify creating Projects ', (I, loginPage, profileSwitcherPage, createProfilePage, profileOverviewPage, createProjectPage ) => {
    I.wait(2);
    loginPage.validatePage();
    loginPage.loginToApp();
    console.log('User authentication successful');
    profileSwitcherPage.validatePage();
    profileSwitcherPage.createSystem();
    createProfilePage.createSystem(); // Creating root system
    I.wait(2);
    console.log('Root System Profile created');
    I.wait(2);
    profileOverviewPage.validatePage();
    profileOverviewPage.validateLeftNav();
    profileOverviewPage.createProject();
    createProjectPage.createProject(); // Create Project 
    console.log ('Project created for system profile')
    I.wait(2);

    profileOverviewPage.createProfile();
    createProfilePage.validatePage();
    createProfilePage.createFacility();// create child 
    console.log('Child Facility Profile created');
    profileOverviewPage.createProjectofChildFacility();
    createProjectPage.createProject();
    console.log ('Project created for child facility profile') //creted Project 
    I.wait(2);
    profileOverviewPage.createProfile();
    createProfilePage.validatePage();
    createProfilePage.createFacility();
    console.log('Second Child Facility  Profile created');
    profileOverviewPage.createProjectofChildFacility();
    createProjectPage.createProject();
    console.log ('Project created for child facility2 profile') // Project for the non-root facility profile created 
   
    I.wait(2);
    profileOverviewPage.createProfile();
    createProfilePage.validatePage();
    createProfilePage.createComposition();
    console.log('Composition Profile created');
    profileOverviewPage.createProjectofChildFacility();
    createProjectPage.createProject();
    console.log ('Project created for composition profile') 
    I.wait(2);
})