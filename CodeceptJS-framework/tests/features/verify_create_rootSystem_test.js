Feature('Create System Profile');
// This Testcase verifies creation of root System
Before((I) => { // or Background
    I.amOnPage('/');
});

Scenario('Verify creating root system  ', (I, loginPage, profileSwitcherPage, createProfilePage, profileOverviewPage) => {
    I.wait(2);
    loginPage.validatePage();
    loginPage.loginToApp();
    console.log('User authentication successful');
    profileSwitcherPage.validatePage();
    profileSwitcherPage.createSystem();
    createProfilePage.createSystem();
    console.log('Root System Profile created');
    profileOverviewPage.validatePage();
    profileOverviewPage.validateSystemCreation();
    profileOverviewPage.validateLeftNav();
    
})
