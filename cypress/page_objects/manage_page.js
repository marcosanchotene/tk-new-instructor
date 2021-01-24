import InstructorsComponent from './instructors_component'

class ManagePage {
    clickManageLearningContent() {
        cy.get('#menuToggle').click()
        cy.get('.sidebar__link[data-target="#collapseCourses"]').click()
    }

    clickInstructors() {
        cy.get('#collapseCourses .sidebar__list-item a[href*="instructors"]').click()
        return new InstructorsComponent()
    }
}

export default ManagePage;