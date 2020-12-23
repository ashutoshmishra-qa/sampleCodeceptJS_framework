const { I } = inject();


module.exports = {

    locators: {
        loginButton: (locate('button').as('Login Button')),
        email: (locate({ name: 'loginfmt' }).as('Enter AD email')),
        confirmemail: (locate({ css: 'input[type=submit]' }).as('Confirm email')),
        password: (locate({ name: 'passwd' }).as('Enter Password')),
        signin: (locate({ css: 'input[type=submit]' }).as('Sign in Button')),
        confirmSignin: (locate({ css: 'input[type=submit]' }).as('Confirm signin'))
    },
    validatePage() {
        I.wait(2);
        I.seeTitleEquals('Sign In - Catalyst Affinity')
    },

    loginToApp() {
        I.seeElement(this.locators.loginButton);
        I.click(this.locators.loginButton);
        I.wait(3);
        I.retry(5).fillField((this.locators.email), 'user1');
        I.click(this.locators.confirmemail);
        I.waitForInvisible(this.locators.email);
        I.waitForElement(this.locators.password);
        I.fillField((this.locators.password), 'pwd');
        I.click(this.locators.signin);
        I.waitForVisible(this.locators.signin);
        I.click(this.locators.confirmSignin);
        I.waitForInvisible(this.locators.confirmSignin);
        I.wait(2);
    }
}
