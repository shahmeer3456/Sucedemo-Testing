const { I } = inject();

Given('I access the Saucedemo website', () => {
    I.amOnPage('https://www.saucedemo.com/v1/inventory.html');
});

When('I enter a wrong username and correct password', () => {
    I.fillField('#user-name', 'stand_user');
    I.fillField('#password', 'secret_sauce');
    I.click('#login-button');
});

Then('I should see an error message', () => {
    I.seeElement('[data-test="error"]');
});

When('I enter valid credentials', () => {
    I.fillField('#user-name', 'standard_user');
    I.fillField('#password', 'secret_sauce');
    I.click('#login-button');
});

Then('I should be logged in successfully', () => {
    I.seeElement('.product_label');
});

When('I log out', () => {
    I.click('.bm-burger-button > button');
    I.click('#logout_sidebar_link');
});

Then('I should be redirected to the login page', () => {
    I.seeElement('#login-button');
});

Given('I am logged in to Saucedemo', () => {
    // Assuming already logged in
});

When('I open the side menu', () => {
    I.click('.bm-burger-button > button');
});

Then('the side menu should be visible', () => {
    I.seeElement('.bm-menu');
});

When('I close the side menu', () => {
    I.click('.bm-cross-button > button');
});

Then('the side menu should not be visible', () => {
    I.dontSeeElement('.bm-menu');
});

When('I add a product to the cart', () => {
    I.click(':nth-child(1) > .pricebar > .btn_primary');
});

Then('the product should be added to the cart', () => {
    I.click('.shopping_cart_link');
    I.seeElement('.item_pricebar > .btn_secondary');
});
When('I delete the product from the cart', () => {
  I.click('.item_pricebar > .btn_secondary');
});

Then('the product should be removed from the cart', () => {
  I.dontSeeElement('.item_pricebar > .btn_secondary');
});

When('I proceed to checkout and complete the required information', () => {
  I.click('.btn_secondary');
  I.click(':nth-child(1) > .pricebar > .btn_primary');
  I.click('.shopping_cart_link');
  I.click('.btn_action');
  I.fillField('[data-test="firstName"]', 'Gabriel');
  I.fillField('[data-test="lastName"]', 'Florescu');
  I.fillField('[data-test="postalCode"]', '123456');
  I.click('.btn_primary');
  I.click('.btn_action');
});

Then('my order should be dispatched successfully', () => {
  I.see('Your order has been dispatched, and will arrive just as fast as the pony can get');
});

When('I access the product details page', () => {
  I.click('.bm-burger-button > button');
  I.click('#inventory_sidebar_link');
  I.click('#item_4_title_link > .inventory_item_name');
});

Then('the product details should be displayed', () => {
  I.seeElement('.inventory_details_desc_container');
});

When('I click on the {string} button', (buttonName) => {
  I.click(`.${buttonName}`);
});

Then('I should be redirected to the products page', () => {
  I.seeElement('.product_label');
});

When('I sort the products by name in descending order', () => {
  I.selectOption('.product_sort_container', 'za');
});

Then('the products should be displayed in descending order by name', () => {
  
});
