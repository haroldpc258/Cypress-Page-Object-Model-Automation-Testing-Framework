# **Cypress-Page-Object-Model-Automation-Testing-Framework**

This repository contains the development of a Cypress project for implementing the Page Object Model design pattern to automate the process of logging into a website. The application interacts with various form elements to verify the successful login.

## Features

The application has the following features:

- Creation of page objects for the login and home pages of the website.
- Interaction with various form elements.
- Automation of the login process.
- Verification of the successful login message.
- Creation of page objects for the Blog and Courses pages.
- Testing of the navigation to the Blog and Courses pages, and their correct display.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need:

- Node.js and npm
- Cypress

### Running the Tests

To run the tests, firstable you need to navigate to the project root and execute the next command in the terminal in order to install all the necessary dependencies:

    npm install
Then you can execute the following command to execute the tests cases:

    npx cypress run
Or execute the next command in order to open de cypress GUI:
        
    npx cypress open
