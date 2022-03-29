import React from 'react';
import useAuth from './../../../../Hooks/useAuth';
import {Redirect, Route } from 'react-router-dom';
import {  } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    // console.log(user);
    if(isLoading){
        return <Spinner animation='border' variant='danger' />
    }
    return (
    <Route
      {...rest}
      render={({ location }) => user.email ? children : <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          ></Redirect>
        }
         ></Route>   
       
    );
};

export default PrivateRoute;