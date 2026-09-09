## Test Data

All test cases requiring an authenticated user use a dedicated test 
account created for this project:
- **Name:** Henrique Jean Duarte
- **Email:** henrique.jean.dev@gmail.com

## TC-LOGIN-01 — should redirect to the home page when login is valid

- **Precondition:** User has a registred account and is on the Login page (https://automationexercise.com/login)
- **Steps:**
  1. Enter a valid email address 
  2. Enter the valid password
  3. Click the "Login" button
- **Expected Result:** User is redirected to the home page, with "Logged in as Henrique Jean Duarte" displayed in the header.
- **Priority:** High

## TC-Login-02 — should display an error message when fields are blank

- **Precondition:** User is on the Login page (https://automationexercise.com/login)
- **Steps:**
  1. Leave the email field blank
  2. Leave the password field blank
  3. Click the "Login" button
- **Expected Result:** Browser-native validation prevents from submission, displaying "Please fill out this field" (browser's default HTML5 validation message, language depends on browser settings - not a custom message from the site).
- **Priority:** Medium

## TC-Login-03 — should display error message when password is invalid

- **Precondition:** User has registred account and is on the Login page (https://automationexercise.com/login)
- **Steps:**
  1. Enter a valid email address
  2. Enter an invalid password
  3. Click the "Login" button
- **Expected Result:** System displays the message "Your email or password is incorrect!" Login is not perfomed
- **Priority:** High

## TC-Login-04 — should a display an error message when username is invalid

- **Precondition:** User is on the Login Page (https://automationexercise.com/login)
- **Steps:**
  1. Enter an email address that is not registred
  2. Enter any password
  3. Click the "Login" buttom
- **Expected Result:** System displays the same generic message as TC-Login-03 ("Your email or password is incorrect!"), without indicating which field is incorrect. Login is not perfomed.
- **Priority:** High

## TC-Register-01 — should display a confirmation page when registration is valid

- **Precondition:** User is on the Signup page, with valid Name and a unique email address
- **Steps:**
  1. Fill in all required account information fields
  2. Click the "Create Account" button 
- **Expected Result:** System display the "ACCOUNT CREATED!" page, with the message "Congratulation! Your new account has been succefully created!" and a "Continue" button.
- **Priority:** High

## TC-Register-02 — should prevent submission when a required field is blank

- **Precondition:** User is on the Signup/Account information page.
- **Steps:**
  1. Leave a required field blank (e.g., Name)
  2. Attempt to procced (click the "Create Account" button )
- **Expected Result:** Browser-native validation prevents form submission, displaying "Please fill out this field" on the first blank required field encountered (browser's default HTML5 validation - not a custom message from the site)
- **Priority:** Medium

## TC-Search-01 — should display the product when the searched product exists

- **Precondition:** User is on the Product Page (https://automationexercise.com/products)
- **Steps:**
  1. Enter the name of an existing product (e.g., "blue top") in the search field
  2. Click the search button
- **Expected Result:** The "SEARCHED PRODUCTS" section displays a product card with image, name, price, and "Add to cart" button.
- **Priority:** High

## TC-Search-02 — should display no results when the searched product does not exist

- **Precondition:** User is on the Product Page (https://automationexercise.com/products)
- **Steps:**
  1. Enter a term that does not match any product (e.g., "produtoinexistente999") in search field
  2. Click the search button
- **Expected Result:** The "SEARCHED PRODUCTS" section renders empty, with no products cards and no massege informing the user that no results were found. (Bug - see BUG-003 in bug-report.md)
- **Priority:** Medium

## TC-CART-01 — should display a confirmation message when a product is added to cart

- **Precondition:** User is on the Products page (https://automationexercise.com/products)
- **Steps:**
  1. Click "Add to cart" on any product

- **Expected Result:** System displays a confirmation modal with the message "Added! Your product has been added to cart.", along with "View Cart" and "Continue Shopping" options.
- **Priority:** High

## TC-CART-02 — should display an empty cart message when all products are removed

- **Precondition:** User has at least one product in the cart and is on the Cart page (https://automationexercise.com/view_cart)

- **Steps:**
  1. Click the remove button (X) next to the product

- **Expected Result:** System display the message "Cart is empty! Click here to buy products."
- **Priority:** High

## TC-CART-03 — should not update quantity when attempting to change it in the cart

- **Precondition:** User has at least one product in the cart and is on the Cart page (https://automationexercise.com/view_cart)

- **Steps:**
  1. Click directly on the quantity field of a product
  2. Attempt to type a different value
  3. Press tab or Enter to confirm
- **Expected Result:** The quantity values does not change, regardless of the input attempted. (Bug -BUG-002 in bug-report.md.)
- **Priority:** Medium

## TC-CHECKOUT-01 — should complete the purchase successfully with valid payment

- **Precondition:** User is logged in, has at least one product in the cart, and is on the Checkout page (https://automationexercise.com/checkout)

- **Steps:**
  1. Review the order summary and click "Place Order"
  2. On the Payment page, fill in Name on Card, Card Number, CVC, and Expiration date
  3. Click "Pay and Confirm Order"
- **Expected Result:** System displays the "ORDER PLACED! page, with the message "Congratulations! Your order has been confirmed!" and options to "Download Invoice" or "Continue".
- **Priority:** High

## TC-Search-02 — [Título do cenário]

- **Precondition:** [estado inicial necessário]
- **Steps:**
  1. [passo 1]
  2. [passo 2]
- **Expected Result:** [resultado esperado — confirmado por execução real, nunca suposição]
- **Priority:** [Alta/Média/Baixa]