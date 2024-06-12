describe('Unauthorized users should be redirected to the login page', () => {
    it('User is redirected to login page from app page', () => {
        cy.visit("http://localhost:3000/app");
        cy.url().should('eq', 'http://localhost:3000/login');
    })
})

describe('Users can login', () => {
    it('User can login', () => {
        cy.clearAllLocalStorage();
        cy.visit("http://localhost:3000/login");
        
        cy.get("#email").type("maker@test.com");

        cy.get("#password").type("Test1234!");

        cy.get("#submit").click();

        cy.url().should('eq', 'http://localhost:3000/app');
    })
})