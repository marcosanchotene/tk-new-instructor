import HomePage from '../page_objects/home_page'


class Tenant {
    constructor(email, password, first_name, last_name) {
        this.email = email
        this.password = password
        this.first_name = first_name
        this.last_name = last_name
        this.home_page = new HomePage()
    }

    signIn() {
        cy.visit(this.home_page.getMainUrl())
        const sign_in_page = this.home_page.clickSignInLink()
        sign_in_page.typeEmail(this.email)
        sign_in_page.typePassword(this.password)
        this.manage_page = sign_in_page.clickSignInButton()
    }

    createNewInstructor(instructor) {
        this.manage_page.clickManageLearningContent()
        this.instructors_component = this.manage_page.clickInstructors()
        this.new_instructor_component = this.instructors_component.clickNewInstructorButton()
        this.new_instructor_component.typeFirstName(instructor.first_name)
        this.new_instructor_component.typeLastName(instructor.last_name)
        this.new_instructor_component.typeEmail(instructor.email)
        this.new_instructor_component.typeTitle(instructor.title)
        this.new_instructor_component.typeBio(instructor.bio)        
        this.manage_page = this.new_instructor_component.clickSaveButton()
        this.new_instructor_component.verifyIfSuccessMessageIsDisplayed()
    }   

}

export default Tenant;