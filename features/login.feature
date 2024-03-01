Feature: Swag Labs - Login
Background : User on the login page 
Given YudhisThiro is on the login page

@positive
  Scenario: As a standart_user, I want to log in successfully
  
   When YudhisThiro login with "standart_user" credential
   Then YudhisThiro should see home page

@negative
   Scenario: As a locked_out_user, I want to log in successfully
   
   When YudhisThiro login with "locked_out_user" credential
   Then YudhisThiro should see error "Epic sadface: Sorry, this user has been locked out"