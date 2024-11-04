const { I } = require('./step_definitions');

describe('Saucedemo Testing', () => {
  test('Verify login functionality with invalid username', async () => {
    await I.amOnPage('https://www.saucedemo.com/v1/inventory.html');
    await I.fillField('#user-name', 'stand_user');
    await I.fillField('#password', 'secret_sauce');
    await I.click('#login-button');
    await I.seeElement('[data-test="error"]');
  });

  test('Verify login functionality with valid credentials', async () => {
    await I.amOnPage('https://www.saucedemo.com/v1/inventory.html');
    await I.fillField('#user-name', 'standard_user');
    await I.fillField('#password', 'secret_sauce');
    await I.click('#login-button');
    await I.seeElement('.product_label');
  });

  test('Verify logout functionality', async () => {
    // Assuming already logged in
    await I.click('.bm-burger-button > button');
    await I.click('#logout_sidebar_link');
    await I.seeElement('#login-button');
  });

  test('Verify side menu functionality', async () => {
    // Assuming already logged in
    await I.click('.bm-burger-button > button');
    await I.seeElement('.bm-menu');
    await I.click('.bm-cross-button > button');
    await I.dontSeeElement('.bm-menu');
  });

  test('Verify adding a product to the cart', async () => {
    // Assuming already logged in
    await I.click(':nth-child(1) > .pricebar > .btn_primary');
    await I.click('.shopping_cart_link');
    await I.seeElement('.item_pricebar > .btn_secondary');
  });

  test('Verify deleting a product from the cart', async () => {
    // Assuming already logged in and a product in the cart
    await I.click('.item_pricebar > .btn_secondary');
    await I.dontSeeElement('.item_pricebar > .btn_secondary');
  });

  test('Verify the checkout process', async () => {
    // Assuming already logged in and a product in the cart
    await I.click('.btn_secondary');
    await I.click(':nth-child(1) > .pricebar > .btn_primary');
    await I.click('.shopping_cart_link');
    await I.click('.btn_action');
    await I.fillField('[data-test="firstName"]', 'Gabriel');
    await I.fillField('[data-test="lastName"]', 'Florescu');
    await I.fillField('[data-test="postalCode"]', '123456');
    await I.click('.btn_primary');
    await I.click('.btn_action');
    await I.see('Your order has been dispatched, and will arrive just as fast as the pony can get');
  });

  test('Verify accessing product details', async () => {
    // Assuming already logged in
    await I.click('.bm-burger-button > button');
    await I.click('#inventory_sidebar_link');
    await I.click('#item_4_title_link > .inventory_item_name');
    await I.seeElement('.inventory_details_desc_container');
  });

  test('Verify "Back to products" button functionality', async () => {
    // Assuming already viewing a product's details
    await I.click('.inventory_details_back_button');
    await I.seeElement('.product_label');
  });

  test('Verify sorting functionality', async () => {
    // Assuming already logged in
    await I.selectOption('.product_sort_container', 'za');
    // Add assertions for verifying the sorting order
  });
});
