class BasePage {
    
    elements = {
        coursesButton: () => cy.contains('Courses'),
        blogButton: () => cy.contains('Blog')
    }
}

module.exports = BasePage;