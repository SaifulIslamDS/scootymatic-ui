import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuths from '../../Hooks/useAuths';

const PrivateRoute = (props) => {
    const {children, ...rest} = props;
    const {user} = useAuths();
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ?
                children :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    >
                </Redirect>}
        ></Route>
    );
};

export default PrivateRoute;