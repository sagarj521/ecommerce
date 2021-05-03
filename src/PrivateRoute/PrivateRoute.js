import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = (props) => {
    const authToken = localStorage.getItem('authToken');

    return (
        <React.Fragment>
            <Route render={prop=>{
                    if(!authToken) {
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