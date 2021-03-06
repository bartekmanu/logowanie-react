import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './base/containers/LoginForm.jsx';

it('should login user with correct password', () => {
  //Arrange
  let isLoggedIn = false;
  const loginUser = () => {
    isLoggedIn = true;
  };
  const loginForm = mount(<LoginForm loginUser={loginUser} />);

  loginForm.find('#email').text('test@test.pl');
  loginForm.find('#password').text('Password1');
  loginForm.find('#submit').simulate('click');

  //Assert
  expect(isLoggedIn).toBeTruthy();
});
