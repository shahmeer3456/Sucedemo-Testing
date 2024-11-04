const { I } = inject();

module.exports = {
  // Define page objects or elements here

  usernameField: '#user-name',
  passwordField: '#password',
  loginButton: '#login-button',
  errorElement: '[data-test="error"]',
  productLabel: '.product_label',
  burgerButton: '.bm-burger-button > button',
  logoutLink: '#logout_sidebar_link',
  sideMenu: '.bm-menu',
  crossButton: '.bm-cross-button > button',
  addToCartButton: ':nth-child(1) > .pricebar > .btn_primary',
  shoppingCartLink: '.shopping_cart_link',
  removeProductButton: '.item_pricebar > .btn_secondary',
  checkoutButton: '.btn_secondary',
  firstNameField: '[data-test="firstName"]',
  lastNameField: '[data-test="lastName"]',
  postalCodeField: '[data-test="postalCode"]',
  completeText: '.complete-text',
  inventorySidebarLink: '#inventory_sidebar_link',
  productDetailsTitleLink: '#item_4_title_link > .inventory_item_name',
  inventoryDetailsContainer: '.inventory_details_desc_container',
  productSortContainer: '.product_sort_container',

  // Define methods to interact with elements

  async login(username, password) {
    I.fillField(this.usernameField, username);
    I.fillField(this.passwordField, password);
    I.click(this.loginButton);
  },

  async logout() {
    I.click(this.burgerButton);
    I.click(this.logoutLink);
  },

  async openSideMenu() {
    I.click(this.burgerButton);
  },

  async closeSideMenu() {
    I.click(this.crossButton);
  },

  async addProductToCart() {
    I.click(this.addToCartButton);
  },

  async removeProductFromCart() {
    I.click(this.removeProductButton);
  },

  async proceedToCheckout(firstName, lastName, postalCode) {
    I.click(this.checkoutButton);
    I.click(this.addToCartButton);
    I.click(this.shoppingCartLink);
    I.click(this.checkoutButton);
    I.fillField(this.firstNameField, firstName);
    I.fillField(this.lastNameField, lastName);
    I.fillField(this.postalCodeField, postalCode);
    I.click(this.checkoutButton);
  },

  async accessProductDetailsPage() {
    I.click(this.burgerButton);
    I.click(this.inventorySidebarLink);
    I.click(this.productDetailsTitleLink);
  },

  async sortProductsByNameDescending() {
    I.selectOption(this.productSortContainer, 'za');
  }
};
