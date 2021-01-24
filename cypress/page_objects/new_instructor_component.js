import ManagePage from './manage_page'

class NewInstructorComponent {
    typeFirstName(first_name) {
        cy.get('#instructor_first_name').type(first_name)
    }

    typeLastName(last_name) {
        cy.get('#instructor_last_name').type(last_name)
    }

    typeEmail(email) {
        cy.get('#instructor_email').type(email)
    }

    typeTitle(title) {
        cy.get('#instructor_title').type(title)
    }

    typeBio(bio) {
        cy.get('#instructor_bio').type(bio)
    }

    clickSaveButton() {
        cy.get('button.button-submit.button.button--primary.save-button').click()
        return new ManagePage()
    }

    verifyIfSuccessMessageIsDisplayed() {
        cy.get('.Toast_toast__3.Toast_toast--notice__44').should('be.visible')
    }

}

export default NewInstructorComponent;