import SignInPage from './sign_in_page';

class HomePage {
    
    getMainUrl() {
        return 'https://www.thinkific.com/'
    }
    
    clickSignInLink() {
        cy.get('.navigation__account-menu__item.navigation__account-menu__log-in .navigation__account-menu__link').click()
        return new SignInPage()
    }

}

export default HomePage;