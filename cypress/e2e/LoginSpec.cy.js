/// <reference types="Cypress" />

import loginPage from "../pages/LoginPage";
import tests from "../fixtures/testsData.json";

describe("Automating the login functionality of the practicetestautomation website", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	tests.forEach((test) => {
		it.only(test.name, () => {
			loginPage.typeUsername(test.user.username);
			loginPage.typePassword(test.user.password);
			let loggedinPage = loginPage.clickSubmit();

			switch (test.name) {
				case "Positive LogIn test":
					cy.url().should(
						"contain",
						"practicetestautomation.com/logged-in-successfully/"
					);
					loggedinPage
						.getLoggedinHeading()
						.should("contain", "Successfully");
					loggedinPage.isLogoutButtonVisible();
					loggedinPage.clickLogout();
					break;
				case "Negative username test":
					loginPage.isErrorMessageVisible();
					loginPage
						.getErrorMessage()
						.should("be.eq", "Your username is invalid!");
					break;
				case "Negative password test":
					loginPage.isErrorMessageVisible();
					loginPage
						.getErrorMessage()
						.should("be.eq", "Your password is invalid!");
					break;
			}
		});
	});
});
