
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Cart from './Cart/Cart';
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
    // const authToken = localStorage.getItem('authToken');
    // props.history.replace('/login');
    // history.replace({ pathname: 'home', search: '?query=abc', state:{isActive: true}});
  }
  const authToken = localStorage.getItem('authToken');
  return (
    <div>
      <Header logOut={logoutHandler} />
      
      <Route render={props=>{
                    if(!authToken) {
                        return <Redirect to="/login"  component={Login} />
                    }

                return <props.component />
                }}
            />

      <Switch>
  <Route path="/products" component={Products} />
        <PrivateRoute path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
       </Switch>
    </div>
  );
}

export default App;
