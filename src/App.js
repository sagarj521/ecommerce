
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import Products from './Products/Products';

function App() {
  return (
    <div>
      <Header logotext="logo heres" />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        {/* <Redirect from="/" to="/products"/> */}
      </Switch>
      Home page
    </div>
  );
}

export default App;
