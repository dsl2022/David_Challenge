import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Function to check if the user is authenticated
const isAuthenticated = () => {
  // Check if the user has a valid access token
  // You can implement your own logic to validate the access token here
  // For simplicity, I'm using a basic check on localStorage
  return localStorage.getItem('accessToken') !== null;
};

// PrivateRoute component
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
