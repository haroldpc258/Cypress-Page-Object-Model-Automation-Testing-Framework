/// <reference types="Cypress" />

import loginPage from '../pages/LoginPage';

describe("Automating the navigation of the practicetestautomation website", () => {
	beforeEach(() => {
		cy.visit("/");
	});

    it('Courses navigation test', () => {
        loginPage.clickCourses();
        let coursesPage = loginPage.clickCourses();
        coursesPage.getCoursesHeading().should('be.eq', 'Courses');
        coursesPage.getButtons().should('have.attr', 'href');
    });

    it('Blog navigation test', () => {
        loginPage.clickBlog();
        let blogPage = loginPage.clickBlog();
        blogPage.getButtons().should('have.attr', 'href');
        blogPage.getImages().should('be.visible');
    });
});
