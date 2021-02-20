describe('Home page', () => {
    it('should visit page', () => {
        cy.visit('http://localhost:3000');
        cy.get('h1').contains('Publications');
    });

    it('should navigate to log page', () => {
        cy.visit('http://localhost:3000');
        cy.get('header [data-test-id="link-Login"]').click();
        cy.get('h1').contains('Login');
    });

    it('should login successful', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('h1').contains('Login');
        cy.get('#username').type('danail');
        cy.get('#password').type('123456d');
        cy.get('button').click();
        cy.get('header [data-test-id="link-Profile"');
    });
});