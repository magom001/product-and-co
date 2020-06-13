describe('Main page with default data', () => {
    it('should display default products', () => {
        cy.visit('/');
        cy.get('body').snapshot();
    });
});
