Feature('Create Datasets under System profiles created');
// This Testcase verifies creation of datasets 
Before((I) => { 
    I.amOnPage('/');
});

Scenario('Verify creating Datasets ', (I, loginPage, profileSwitcherPage, createProfilePage, profileOverviewPage, createProjectPage,createDatasetPage, datasetOverviewPage ) => {
    I.wait(2);
    loginPage.validatePage();
    loginPage.loginToApp();
    console.log('User authentication successful');
    profileSwitcherPage.validatePage();
    profileSwitcherPage.createSystem();
    createProfilePage.createSystem(); // Creating root system
 
    console.log('Root System Profile created');
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
    console.log ('Project created for child facility profile')
    I.wait(2);
    profileOverviewPage.createProfile();
    createProfilePage.validatePage();
    createProfilePage.createFacility();
    console.log('Second Child Facility  Profile created');
    profileOverviewPage.createProjectofChildFacility();
    createProjectPage.createProject();
    console.log ('Project created for child facility2 profile') 
    I.wait(2);

    profileOverviewPage.createDataset();
    datasetOverviewPage.addAnotherDataset();
    I.wait(2);
    createDatasetPage.createDataset(); // create a data set
    I.wait(2);
    profileOverviewPage.createDataset();
    datasetOverviewPage.addAnotherDataset();
    I.wait(2);
    createDatasetPage.createGenericDataset(); // create a generic data set
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