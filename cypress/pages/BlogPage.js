class BlogPage {

    elements = {
        images: () => cy.get('article img'),
        buttons: () => cy.get('article a')
    }

    getImages() {
        return this.elements.images();
    }

    getButtons() {
        return this.elements.buttons();
    }
}

module.exports = new BlogPage();