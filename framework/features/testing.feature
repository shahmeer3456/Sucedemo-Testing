Feature: Saucedemo Testing

  Scenario: Verify login functionality with invalid username
    Given I access the Saucedemo website
    When I enter a wrong username and correct password
    Then I should see an error message

  Scenario: Verify login functionality with valid credentials
    Given I access the Saucedemo website
    When I enter valid credentials
    Then I should be logged in successfully

  Scenario: Verify logout functionality
    Given I am logged in to Saucedemo
    When I log out
    Then I should be redirected to the login page

  Scenario: Verify side menu functionality
    Given I am logged in to Saucedemo
    When I open the side menu
    Then the side menu should be visible
    When I close the side menu
    Then the side menu should not be visible

  Scenario: Verify adding a product to the cart
    Given I am logged in to Saucedemo
    When I add a product to the cart
    Then the product should be added to the cart

  Scenario: Verify deleting a product from the cart
    Given I am logged in to Saucedemo and have a product in the cart
    When I delete the product from the cart
    Then the product should be removed from the cart

  Scenario: Verify the checkout process
    Given I am logged in to Saucedemo and have a product in the cart
    When I proceed to checkout and complete the required information
    Then my order should be dispatched successfully

  Scenario: Verify accessing product details
    Given I am logged in to Saucedemo
    When I access the product details page
    Then the product details should be displayed

  Scenario: Verify 'Back to products' button functionality
    Given I am viewing a product's details on Saucedemo
    When I click on the 'Back to products' button
    Then I should be redirected to the products page

  Scenario: Verify sorting functionality
    Given I am logged in to Saucedemo
    When I sort the products by name in descending order
    Then the products should be displayed in descending order by name
