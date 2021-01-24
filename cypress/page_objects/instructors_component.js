import NewInstructorComponent from './new_instructor_component'

class InstructorsComponent {
    clickNewInstructorButton() {        
        cy.get('a.button.button--primary.button--icon-only').click()
        return new NewInstructorComponent()
    }
}

export default InstructorsComponent;