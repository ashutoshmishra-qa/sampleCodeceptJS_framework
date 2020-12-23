Feature('Login to Application');
// this test case test only the login funtionality
Before((I) => { // or Background
    I.amOnPage('/login');
});

Scenario('Verifies the user logs in ', (I, loginPage) => {

    loginPage.validatePage();
    loginPage.loginToApp();
    console.log('User authentication successful')
})