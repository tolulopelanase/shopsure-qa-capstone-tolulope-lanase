# ShopSure Playwright Test Cases

## Overview

This document describes the nine automated user journeys covered by the ShopSure Playwright test suite.

The tests validate important e-commerce functions on the Automation Exercise website using Chromium and Firefox browsers.

## Test Cases

### 1. Register a New User
**Objective:** Verify that a new user can create an account.

**Expected result:** The user account is created successfully and the application displays the account confirmation.

### 2. Login with Valid Credentials
**Objective:** Verify that a registered user can log in.

**Expected result:** The user is authenticated and the application displays the logged-in account.

### 3. Login with an Invalid Password
**Objective:** Verify that the application rejects an incorrect password.

**Expected result:** Login is unsuccessful and an appropriate error message is displayed.

Good. Now add the remaining test cases below the section you just entered:
### 4. Logout User
**Objective:** Verify that a logged-in user can safely log out.

**Expected result:** The session ends and the application returns to the logged-out state.

### 5. Search for a Product
**Objective:** Verify that users can search for products.

**Expected result:** Relevant products matching the search term are displayed.

### 6. View Product Details
**Objective:** Verify that users can open a product's details page.

**Expected result:** Product information, including its name and price, is displayed.

### 7. Add Products to Cart
**Objective:** Verify that users can add products to their shopping cart.

**Expected result:** The selected products appear in the cart with the correct details.

### 8. Remove a Product from Cart
**Objective:** Verify that users can remove products from their shopping cart.

**Expected result:** The selected product is removed from the cart.

### 9. Register with an Existing Email
**Objective:** Verify that the application prevents registration with an email address already in use.

**Expected result:** Registration is rejected and an appropriate error message is displayed.

## Browser Coverage

The test suite is configured to execute the nine user journeys using Chromium and Firefox.

## Test Implementation

- Playwright for browser automation.
- Page Object Model for reusable page interactions.
- Web-first assertions for validating application behaviour.
- HTML reporting for reviewing test execution results.
