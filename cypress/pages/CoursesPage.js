class CoursesPage {
    
    elements = {
        coursesHeading: () => cy.get('article h1'),
        buttons: () => cy.get('article a')
    }

    getCoursesHeading() {
        return this.elements.coursesHeading().invoke('text');
    }

    getButtons() {
        return this.elements.buttons();
    }
}

module.exports = new CoursesPage();