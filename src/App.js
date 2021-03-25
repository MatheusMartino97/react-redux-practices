import { Switch, Route } from 'react-router';
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/cart" component={ ShoppingCart }/>
        <Route exact path="/" component={ Home }/>
      </Switch>
    </div>
  );
}

export default App;
