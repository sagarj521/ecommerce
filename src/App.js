
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Cart from './Cart/Cart';
import Details from './Details/Details';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './Header/Header';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Products from './Products/Products';

function App() {

  const logoutHandler = (e) => {
    console.log("in",e.target.attributes.test.nodeValue);
    console.log("in",e.target.attributes.test.nodeValue);
    e.preventDefault();

    localStorage.clear();
    // props.history.replace('/login');
    // history.replace({ pathname: 'home', search: '?query=abc', state:{isActive: true}});
  }

  return (
    <div>
      <Header logOut={logoutHandler} />
      
      <ErrorBoundary>
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
      </ErrorBoundary>
      

      <Switch>
        <Route path="/products" component={Products} />
        <PrivateRoute path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/product-details" component={Details} />
        
        {/* <Redirect from="/" to="/products"/> */}
      </Switch>
    </div>
  );
}

export default App;
