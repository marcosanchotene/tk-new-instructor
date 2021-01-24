import ManagePage from './manage_page'

class SignInPage {
    typeEmail(email) {
        cy.get('#email').type(email)
    }

    typePassword(password) {
        cy.get('#password').type(password)
    }

    clickSignInButton() {
        cy.get('button.button--icon.button--icon--right.signin__form__button').click()
        return new ManagePage()
    }
}

export default SignInPage;