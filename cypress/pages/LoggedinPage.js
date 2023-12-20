import BasePage from './BasePage';

class LoggedinPage extends BasePage {
    
    elements = {
        ...this.elements, // We are copying the properties of the elements object of the parent class
        LoggedinHeading: () => cy.get('article h1'),
        logoutButton: () => cy.get('article a')
    }

    clickLogout() {
        this.elements.logoutButton().click();
    }

    getLoggedinHeading() {
        return this.elements.LoggedinHeading().invoke('text');
    }

    isLogoutButtonVisible() {
        this.elements.logoutButton().should('be.visible');
    }
}

module.exports = new LoggedinPage();