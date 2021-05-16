import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import AuthContext from '../Context/auth-context';

const PrivateRoute = (props) => {
    const auth = useContext(AuthContext);

    return (
        <React.Fragment>
            <Route render={prop=>{
                    if(!auth.isLoggedIn) {
                        return <Redirect to="/login"/>
                    }

                return <props.component />
                }}
            />
             {/* {!!authToken? <Route render={routeProps => (                       
                        props.component
                )} />: 
                <Redirect to="/login" />
             } */}
            
        </React.Fragment>
    )
}

export default PrivateRoute;