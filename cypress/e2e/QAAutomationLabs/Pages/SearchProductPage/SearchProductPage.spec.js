class SearchProduct {
  SearchProduct(searchProductName) {
    cy.get('.hamburger').click({ force: true });
    cy.get('#wp-block-search__input-1')
      .click({ force: true })
      .type(searchProductName);
    cy.get('#block-10 > .wp-block-search__button-outside > .wp-block-search__inside-wrapper > .wp-block-search__button').click({ force: true });
  }
  verifyProduct(searchProductName) {
    cy.get('[id ="main"]').contains(searchProductName);
  }
}
const searchProduct = new SearchProduct();
export default searchProduct;