import loggedinPage from './LoggedinPage';
import BasePage from './BasePage';
import coursesPage from './CoursesPage';
import blogPage from './BlogPage';

class LoginPage extends BasePage {
    
    elements = {
        ...this.elements, // We are copying the properties of the elements object of the parent class
        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        submitButton: () => cy.get('#submit'),
        errorMessage: () => cy.get('#error')
    }

    clickCourses() {
        this.elements.coursesButton().click();
        return coursesPage;
    }

    clickBlog() {
        this.elements.blogButton().click();
        return blogPage;
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickSubmit() {
        this.elements.submitButton().click();
        return loggedinPage;
    }

    getErrorMessage() {
        return this.elements.errorMessage().invoke('text');
    }

    isErrorMessageVisible() {
        this.elements.errorMessage().should('be.visible');
    }
}

module.exports = new LoginPage();