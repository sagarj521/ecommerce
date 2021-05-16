
import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router';
import './App.css';
import Cart from './Cart/Cart';
import AuthContext from './Context/auth-context';
import Details from './Details/Details';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './Header/Header';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Products from './Products/Products';

function App() {

  const history = useHistory();

  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(()=>{
    const authToken = localStorage.getItem('authToken');
    
    if( authToken != null) {
      setAuthentication(true);
    }
  }, []);
  
  const afterLogin = () => {
    console.log("after login");
    setAuthentication(true);
    history.push('/products');
  };
  
  const afterLogout = () => {
    console.log("after logout");
    localStorage.clear();
    setAuthentication(false);
    history.push('/login');
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isAuthenticated,
      handleLogin: afterLogin,
      handleLogout: afterLogout,
  }}>

      <Header />
      
      {/* <ErrorBoundary>
        <Details name="sagar" />
      </ErrorBoundary> 
      <ErrorBoundary>
        <Details name="kajal" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Details name="ekta" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Details name="bhavana" />
      </ErrorBoundary> */}
      

      <Switch>
        <Route path="/products" component={Products} />
        <PrivateRoute path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/product-details/:cakeid" component={Details} />
        
        {/* <Redirect from="/" to="/products"/> */}
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
